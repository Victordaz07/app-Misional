import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { StorageService } from '../utils/storage';

// Import JSON translation files
import esTranslations from '../../i18n/es.json';
import enTranslations from '../../i18n/en.json';
import frTranslations from '../../i18n/fr.json';
import ptTranslations from '../../i18n/pt.json';
import missionaryEsTranslations from '../../i18n/missionary.es.json';

const dictionaries = {
    es: esTranslations,
    en: enTranslations,
    fr: frTranslations,
    pt: ptTranslations,
};

// Diccionario de misioneros (solo español por ahora)
const missionaryDictionaries = {
    es: missionaryEsTranslations,
    en: {}, // TODO: Agregar cuando tengamos las traducciones
    fr: {},
    pt: {},
};

export type Locale = 'es' | 'en' | 'fr' | 'pt';

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => Promise<void>;
    t: (path: string, vars?: Record<string, string | number>) => string;
    setUserRole: (role: string | null) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
    children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
    const [locale, setLocaleState] = useState<Locale>('es');
    const [userRole, setUserRoleState] = useState<string | null>(null);

    useEffect(() => {
        loadLocale();
        // Cargar rol desde storage
        const storedRole = StorageService.getItem('userRole');
        if (storedRole) {
            setUserRoleState(storedRole);
        }
        
        // Escuchar cambios en storage (para sincronizar con AuthContext)
        const interval = setInterval(() => {
            const currentRole = StorageService.getItem('userRole');
            if (currentRole !== userRole) {
                setUserRoleState(currentRole);
            }
        }, 500);
        
        return () => clearInterval(interval);
    }, [userRole]);

    const loadLocale = async () => {
        try {
            const storedLocale = StorageService.getItem('appLang');
            if (storedLocale && ['es', 'en', 'fr', 'pt'].includes(storedLocale)) {
                setLocaleState(storedLocale as Locale);
            } else {
                // Detectar idioma del sistema
                const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
                const detectedLocale = systemLocale.includes('es') ? 'es' : 'en';
                setLocaleState(detectedLocale);
                StorageService.setItem('appLang', detectedLocale);
            }
        } catch (error) {
            console.error('Error loading locale:', error);
            setLocaleState('es');
        }
    };

    const setLocale = async (newLocale: Locale) => {
        try {
            StorageService.setItem('appLang', newLocale);
            setLocaleState(newLocale);
        } catch (error) {
            console.error('Error saving locale:', error);
        }
    };

    const t = (path: string, vars?: Record<string, string | number>): string => {
        // Si es misionero y la clave empieza con "missionary.", buscar primero en missionaryDictionaries
        if (userRole === 'missionary' && path.startsWith('missionary.')) {
            const missionaryTranslations = missionaryDictionaries[locale] as Record<string, string>;
            const missionaryValue = missionaryTranslations[path];
            if (missionaryValue !== undefined) {
                if (vars && typeof missionaryValue === 'string') {
                    return missionaryValue.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                        return vars[key]?.toString() || match;
                    });
                }
                return missionaryValue.toString();
            }
        }

        const currentTranslations = dictionaries[locale] as Record<string, string>;
        const value = currentTranslations[path];

        // Si no se encuentra en el idioma actual, buscar en inglés como fallback
        if (value === undefined) {
            const englishTranslations = dictionaries.en as Record<string, string>;
            const englishValue = englishTranslations[path];
            if (englishValue === undefined) {
                return path; // Devolver la clave si no se encuentra en ningún idioma
            }

            // Aplicar variables si existen
            if (vars && typeof englishValue === 'string') {
                return englishValue.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                    return vars[key]?.toString() || match;
                });
            }

            return englishValue.toString();
        }

        // Aplicar variables si existen
        if (vars && typeof value === 'string') {
            return value.replace(/\{\{(\w+)\}\}/g, (match, key) => {
                return vars[key]?.toString() || match;
            });
        }

        return value.toString();
    };

    const setUserRole = (role: string | null) => {
        setUserRoleState(role);
    };

    return (
        <I18nContext.Provider value={{ locale, setLocale, t, setUserRole }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};


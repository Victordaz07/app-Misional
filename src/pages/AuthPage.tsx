import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useI18n } from '../context/I18nContext';
import './AuthPage.css';

const AuthPage: React.FC = () => {
    const { login, isLoading, userRole } = useAuth();
    const { t } = useI18n();
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    // Redirigir si ya está autenticado
    useEffect(() => {
        if (userRole) {
            navigate('/home', { replace: true });
        }
    }, [userRole, navigate]);

    const handleRoleSelection = (role: string) => {
        setSelectedRole(role);
    };

    const confirmLogin = async () => {
        if (!selectedRole) {
            alert(t('auth.selectRoleAlert'));
            return;
        }

        try {
            await login(selectedRole);
            // Redirigir según el rol
            if (selectedRole === 'member') {
                navigate('/member/home', { replace: true });
            } else {
                navigate('/home', { replace: true });
            }
        } catch (error) {
            alert(t('auth.loginError'));
            console.error('Login error:', error);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-logo">
                    <span style={{ fontSize: '80px' }}>⛪</span>
                </div>

                <h1 className="auth-title">{t('auth.welcome')}</h1>
                <p className="auth-subtitle">{t('auth.selectRole')}</p>

                <div className="role-buttons-container">
                    <button
                        className={`role-button ${selectedRole === 'investigator' ? 'selected' : ''}`}
                        onClick={() => handleRoleSelection('investigator')}
                    >
                        <span className="role-icon">👤</span>
                        <span className="role-title">{t('auth.investigator')}</span>
                        <span className="role-description">{t('auth.investigatorDesc')}</span>
                    </button>

                    <button
                        className={`role-button ${selectedRole === 'missionary' ? 'selected' : ''}`}
                        onClick={() => handleRoleSelection('missionary')}
                    >
                        <span className="role-icon">🙌</span>
                        <span className="role-title">{t('auth.missionary')}</span>
                        <span className="role-description">{t('auth.missionaryDesc')}</span>
                    </button>

                    <button
                        className={`role-button ${selectedRole === 'member' ? 'selected' : ''}`}
                        onClick={() => handleRoleSelection('member')}
                    >
                        <span className="role-icon">🕊️</span>
                        <span className="role-title">{t('auth.member')}</span>
                        <span className="role-description">{t('auth.memberDesc')}</span>
                    </button>
                </div>

                <button
                    className={`login-button ${(!selectedRole || isLoading) ? 'disabled' : ''}`}
                    onClick={confirmLogin}
                    disabled={!selectedRole || isLoading}
                >
                    {isLoading ? t('auth.loading') : t('auth.continue')}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;


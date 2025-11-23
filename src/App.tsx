import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from './context/I18nContext';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <I18nProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </I18nProvider>
  );
}


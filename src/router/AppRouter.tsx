import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthPage from '../pages/AuthPage';
import InvestigatorLayout from '../layouts/InvestigatorLayout';
import MissionaryLayout from '../layouts/MissionaryLayout';
import LoadingScreen from '../components/LoadingScreen';

const AppRouter: React.FC = () => {
  const { userRole, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Si hay userRole y está en /auth, redirigir a /home
  if (userRole && location.pathname === '/auth') {
    return <Navigate to="/home" replace />;
  }

  return (
    <Routes>
      {userRole ? (
        userRole === 'investigator' ? (
          <Route path="/*" element={<InvestigatorLayout />} />
        ) : (
          <Route path="/*" element={<MissionaryLayout />} />
        )
      ) : (
        <>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;


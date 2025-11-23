import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthPage from '../pages/AuthPage';
import InvestigatorLayout from '../layouts/InvestigatorLayout';
import MissionaryLayout from '../layouts/MissionaryLayout';
import LoadingScreen from '../components/LoadingScreen';

const AppRouter: React.FC = () => {
  const { userRole, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
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


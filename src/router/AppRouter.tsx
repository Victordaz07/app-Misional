import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthPage from '../pages/AuthPage';
import InvestigatorLayout from '../layouts/InvestigatorLayout';
import MissionaryLayout from '../layouts/MissionaryLayout';
import MemberLayout from '../layouts/MemberLayout';
import LoadingScreen from '../components/LoadingScreen';

const AppRouter: React.FC = () => {
  const { userRole, isLoading } = useAuth();
  const location = useLocation();

  console.log('🔀 AppRouter - userRole:', userRole, 'isLoading:', isLoading, 'pathname:', location.pathname);

  if (isLoading) {
    console.log('⏳ Mostrando pantalla de carga...');
    return <LoadingScreen />;
  }

  // Si hay userRole y está en /auth, redirigir a la sección correcta según el rol
  if (userRole && location.pathname === '/auth') {
    if (userRole === 'member') {
      return <Navigate to="/member/home" replace />;
    }
    return <Navigate to="/home" replace />;
  }

  // Protección de rutas: si intenta acceder a rutas de misionero sin ser misionero
  if (userRole !== 'missionary' && location.pathname.startsWith('/missionary')) {
    return <Navigate to="/home" replace />;
  }

  // Protección de rutas: si intenta acceder a rutas de investigador siendo misionero
  if (userRole === 'missionary' && (location.pathname.startsWith('/baptism') || location.pathname.startsWith('/progress'))) {
    return <Navigate to="/home" replace />;
  }

  // Protección de rutas: si intenta acceder a rutas de miembro sin serlo
  if (userRole !== 'member' && location.pathname.startsWith('/member')) {
    return <Navigate to="/home" replace />;
  }

  // Redirigir a la sección correcta cuando el rol es miembro
  if (userRole === 'member' && !location.pathname.startsWith('/member')) {
    return <Navigate to="/member/home" replace />;
  }

  return (
    <Routes>
      {userRole ? (
        userRole === 'investigator' ? (
          <Route path="/*" element={<InvestigatorLayout />} />
        ) : userRole === 'missionary' ? (
          <Route path="/*" element={<MissionaryLayout />} />
        ) : (
          <Route path="/*" element={<MemberLayout />} />
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


import React from 'react';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';
import MissionaryHome from '../pages/missionary/MissionaryHome';
import MissionaryAgenda from '../pages/missionary/MissionaryAgenda';
import MissionaryPeople from '../pages/missionary/MissionaryPeople';
import MissionaryLessons from '../pages/missionary/MissionaryLessons';
import MissionaryProfile from '../pages/missionary/MissionaryProfile';
import CommitmentsPage from '../pages/CommitmentsPage';
import './Layout.css';

const MissionaryLayout: React.FC = () => {
  const { t } = useI18n();
  const location = useLocation();

  const tabs = [
    { path: '/home', label: t('tabs.home'), icon: '🏠' },
    { path: '/agenda', label: t('tabs.agenda'), icon: '📅' },
    { path: '/people', label: t('tabs.people'), icon: '👥' },
    { path: '/tasks', label: t('tabs.tasks'), icon: '✅' },
    { path: '/lessons', label: t('missionary.header') || 'Mis Lecciones', icon: '📖' },
    { path: '/profile', label: t('tabs.profile'), icon: '👤' },
  ];

  return (
    <div className="layout">
      <main className="layout-content">
        <Routes>
          <Route path="/home" element={<MissionaryHome />} />
          <Route path="/agenda" element={<MissionaryAgenda />} />
          <Route path="/people" element={<MissionaryPeople />} />
          <Route path="/tasks" element={<CommitmentsPage />} />
          <Route path="/lessons/*" element={<MissionaryLessons />} />
          <Route path="/missionary/lessons/*" element={<MissionaryLessons />} />
          <Route path="/profile" element={<MissionaryProfile />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      <nav className="bottom-nav">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`nav-item ${location.pathname.startsWith(tab.path) ? 'active' : ''}`}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MissionaryLayout;


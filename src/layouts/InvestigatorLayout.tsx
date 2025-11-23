import React from 'react';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';
import InvestigatorHome from '../pages/investigator/InvestigatorHome';
import InvestigatorLessons from '../pages/investigator/InvestigatorLessons';
import InvestigatorProgress from '../pages/investigator/InvestigatorProgress';
import InvestigatorBaptism from '../pages/investigator/InvestigatorBaptism';
import InvestigatorProfile from '../pages/investigator/InvestigatorProfile';
import CommitmentsPage from '../pages/CommitmentsPage';
import GodStoryPage from '../pages/investigator/GodStoryPage';
import DifficultQuestionsPage from '../pages/investigator/DifficultQuestionsPage';
import './Layout.css';

const InvestigatorLayout: React.FC = () => {
  const { t } = useI18n();
  const location = useLocation();

  const tabs = [
    { path: '/home', label: t('tabs.home'), icon: '🏠' },
    { path: '/lessons', label: t('tabs.lessons'), icon: '📖' },
    { path: '/tasks', label: t('tabs.tasks'), icon: '✅' },
    { path: '/progress', label: t('tabs.progress'), icon: '📊' },
    { path: '/baptism', label: t('tabs.baptism'), icon: '💧' },
    { path: '/profile', label: t('tabs.profile'), icon: '👤' },
  ];

  return (
    <div className="layout">
      <main className="layout-content">
        <Routes>
          <Route path="/home" element={<InvestigatorHome />} />
          <Route path="/lessons/*" element={<InvestigatorLessons />} />
          <Route path="/tasks" element={<CommitmentsPage />} />
          <Route path="/progress" element={<InvestigatorProgress />} />
          <Route path="/baptism" element={<InvestigatorBaptism />} />
          <Route path="/profile" element={<InvestigatorProfile />} />
          <Route path="/god-story" element={<GodStoryPage />} />
          <Route path="/difficult-questions" element={<DifficultQuestionsPage />} />
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

export default InvestigatorLayout;


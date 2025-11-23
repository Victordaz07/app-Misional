import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useI18n } from '../../context/I18nContext';
import { useProgress } from '../../context/ProgressContext';
import './Page.css';
import './HomePage.css';

const InvestigatorHome: React.FC = () => {
  const { userRole } = useAuth();
  const { t } = useI18n();
  const { getOverallProgress } = useProgress();

  const overallProgress = getOverallProgress();
  const completedLessons = overallProgress.completedLessons || 0;
  const totalLessons = overallProgress.totalLessons || 6;
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const quickActions = [
    {
      icon: '📖',
      title: 'Lecciones',
      description: 'Continúa aprendiendo',
      link: '/lessons',
      color: 'primary'
    },
    {
      icon: '📊',
      title: 'Progreso',
      description: 'Ver tu avance',
      link: '/progress',
      color: 'secondary'
    },
    {
      icon: '✅',
      title: 'Tareas',
      description: 'Gestiona tus tareas',
      link: '/tasks',
      color: 'accent'
    },
    {
      icon: '💧',
      title: 'Bautismo',
      description: 'Preparación',
      link: '/baptism',
      color: 'info'
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('tabs.home')}</h1>
        <p>Bienvenido, Investigador</p>
      </div>
      <div className="page-content">
        {/* Progress Card */}
        <div className="home-progress-card">
          <div className="progress-card-header">
            <div>
              <h2>Tu Progreso</h2>
              <p className="progress-subtitle">{completedLessons} de {totalLessons} lecciones completadas</p>
            </div>
            <div className="progress-percentage">{progressPercent}%</div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="home-section">
          <h3 className="section-title">Accesos Rápidos</h3>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className={`quick-action-card action-${action.color}`}
              >
                <div className="action-icon">{action.icon}</div>
                <div className="action-content">
                  <h4 className="action-title">{action.title}</h4>
                  <p className="action-description">{action.description}</p>
                </div>
                <div className="action-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Welcome Message */}
        <div className="home-welcome-card">
          <div className="welcome-icon">✨</div>
          <h3>¡Bienvenido a tu jornada espiritual!</h3>
          <p>Estamos aquí para apoyarte en tu aprendizaje del evangelio. Explora las lecciones, completa las tareas y sigue tu progreso.</p>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorHome;


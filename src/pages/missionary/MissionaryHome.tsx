import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext';
import { CommitmentsService, Commitment } from '../../services/commitmentsService';
import { useProgress } from '../../context/ProgressContext';
import './Page.css';
import './MissionaryHome.css';

const MissionaryHome: React.FC = () => {
  const { t } = useI18n();
  const { progress, getOverallProgress } = useProgress();
  const [commitments, setCommitments] = useState<Commitment[]>([]);
  const [upcomingCommitments, setUpcomingCommitments] = useState<Commitment[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const allCommitments = await CommitmentsService.loadCommitments();
    setCommitments(allCommitments);
    
    // Próximos compromisos (no completados, con fecha)
    const upcoming = allCommitments
      .filter(c => !c.completed && c.dueDate)
      .sort((a, b) => {
        const dateA = new Date(a.dueDate!).getTime();
        const dateB = new Date(b.dueDate!).getTime();
        return dateA - dateB;
      })
      .slice(0, 3);
    setUpcomingCommitments(upcoming);
  };

  const overallProgress = getOverallProgress();
  const completedCommitments = commitments.filter(c => c.completed).length;
  const totalCommitments = commitments.length;
  const pendingCommitments = commitments.filter(c => !c.completed).length;

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('missionary.home.title') || 'Inicio - Misionero'}</h1>
        <p>{t('missionary.home.subtitle') || 'Panel de control y herramientas'}</p>
      </div>

      <div className="page-content">
        {/* Estadísticas rápidas */}
        <div className="missionary-stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>{overallProgress.completedLessons} / {overallProgress.totalLessons}</h3>
              <p>{t('missionary.home.lessonsCompleted') || 'Lecciones completadas'}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{completedCommitments} / {totalCommitments}</h3>
              <p>{t('missionary.home.commitmentsCompleted') || 'Compromisos cumplidos'}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>{pendingCommitments}</h3>
              <p>{t('missionary.home.pendingCommitments') || 'Compromisos pendientes'}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <h3>{overallProgress.percentage}%</h3>
              <p>{t('missionary.home.progress') || 'Progreso general'}</p>
            </div>
          </div>
        </div>

        {/* Próximos compromisos */}
        {upcomingCommitments.length > 0 && (
          <div className="missionary-section">
            <div className="section-header">
              <h2>{t('missionary.home.upcomingCommitments') || 'Próximos Compromisos'}</h2>
              <Link to="/tasks" className="section-link">
                {t('missionary.home.seeAll') || 'Ver todos →'}
              </Link>
            </div>
            <div className="commitments-preview">
              {upcomingCommitments.map((commitment) => (
                <div key={commitment.id} className="commitment-preview-item">
                  <div className="commitment-preview-content">
                    <h4>{commitment.title}</h4>
                    {commitment.dueDate && (
                      <p className="commitment-date">
                        📅 {new Date(commitment.dueDate).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    )}
                  </div>
                  <span className={`commitment-category-badge category-${commitment.category}`}>
                    {commitment.category === 'study' && '📚'}
                    {commitment.category === 'spiritual' && '🙏'}
                    {commitment.category === 'attendance' && '⛪'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Acciones rápidas */}
        <div className="missionary-section">
          <h2>{t('missionary.home.quickActions') || 'Acciones Rápidas'}</h2>
          <div className="quick-actions-grid">
            <Link to="/lessons" className="quick-action-card">
              <div className="quick-action-icon">📖</div>
              <h3>{t('missionary.home.viewLessons') || 'Ver Mis Lecciones'}</h3>
              <p>{t('missionary.home.viewLessonsDesc') || 'Accede a tus hojas de estudio PMG'}</p>
            </Link>

            <Link to="/people" className="quick-action-card">
              <div className="quick-action-icon">👥</div>
              <h3>{t('missionary.home.viewPeople') || 'Ver Personas'}</h3>
              <p>{t('missionary.home.viewPeopleDesc') || 'Gestiona tus investigadores'}</p>
            </Link>

            <Link to="/agenda" className="quick-action-card">
              <div className="quick-action-icon">📅</div>
              <h3>{t('missionary.home.viewAgenda') || 'Ver Agenda'}</h3>
              <p>{t('missionary.home.viewAgendaDesc') || 'Revisa tus citas y actividades'}</p>
            </Link>

            <Link to="/tasks" className="quick-action-card">
              <div className="quick-action-icon">✅</div>
              <h3>{t('missionary.home.viewCommitments') || 'Ver Compromisos'}</h3>
              <p>{t('missionary.home.viewCommitmentsDesc') || 'Gestiona compromisos y tareas'}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionaryHome;

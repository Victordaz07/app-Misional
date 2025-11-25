import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext';
import { memberStudyModules } from '../data/memberStudyModules';
import { memberActivities } from '../data/memberActivities';
import { useMemberProgressStore } from '../state/memberProgressStore';
import { ProgressSummary } from '../components/ProgressSummary';
import { buildSectionProgressId } from '../utils/progressIds';
import '../../pages/Page.css';
import './MemberHome.css';

const getNextSectionLabel = (moduleId: string, sectionId: string) => `/member/study/${moduleId}/${sectionId}`;

export const MemberHome: React.FC = () => {
  const { t, locale } = useI18n();
  const progress = useMemberProgressStore((state) => state.progress);
  const completedSections = useMemberProgressStore((state) => state.completedStudySectionIds);

  const recommendedModule = memberStudyModules.find((module) => {
    const pending = module.sections.find(
      (section) => !completedSections.includes(buildSectionProgressId(module.id, section.id)),
    );
    return Boolean(pending);
  }) ?? memberStudyModules[0];

  const nextSection =
    recommendedModule.sections.find(
      (section) => !completedSections.includes(buildSectionProgressId(recommendedModule.id, section.id)),
    ) ?? recommendedModule.sections[0];

  const activitySuggestions = memberActivities
    .filter((activity) => activity.levelRecommended <= progress.level + 1)
    .slice(0, 3);

  const quickActions = [
    {
      icon: '📖',
      title: t('member.home.cards.study.title'),
      description: t('member.home.cards.study.subtitle'),
      link: '/member/study',
      color: 'primary',
    },
    {
      icon: '👥',
      title: t('member.home.cards.conversionCare.title'),
      description: t('member.home.cards.conversionCare.subtitle'),
      link: '/member/convertidos',
      color: 'secondary',
    },
    {
      icon: '🎯',
      title: t('member.home.cards.friends.title'),
      description: t('member.home.cards.friends.subtitle'),
      link: '/member/friends',
      color: 'accent',
    },
    {
      icon: '🤝',
      title: t('member.home.cards.support.title'),
      description: t('member.home.cards.support.subtitle'),
      link: '/member/support',
      color: 'info',
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('member.home.title')}</h1>
        <p className="page-subtitle">{t('member.home.welcomeSubtitle')}</p>
      </div>

      <div className="page-content">
        {/* Hero Section - Primero estudiamos, luego practicamos */}
        <div className="member-hero-card">
          <div className="hero-content">
            <p className="hero-label">{t('member.home.welcomeTitle')}</p>
            <h2 className="hero-title">{t('member.home.heroCallToAction')}</h2>
            {nextSection && (
              <div className="hero-cta">
                <div className="hero-suggestion">
                  <span className="hero-suggestion-label">Próxima sección sugerida:</span>
                  <strong className="hero-suggestion-text">
                    {recommendedModule.title} · {nextSection.title}
                  </strong>
                </div>
                <Link to={getNextSectionLabel(recommendedModule.id, nextSection.id)} className="hero-button">
                  Ir a estudiar →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Progress Summary Card */}
        <div className="home-progress-card">
          <div className="progress-card-header">
            <div>
              <h2>Progreso Espiritual</h2>
              <p className="progress-subtitle">
                Nivel {progress.level} · {progress.xp} XP total
              </p>
              <p className="progress-subtitle">Racha: {progress.streakDays} días</p>
            </div>
            <div className="progress-percentage">
              {Math.round((progress.xp / 200) * 100)}%
            </div>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${Math.min(100, Math.round((progress.xp / 200) * 100))}%` }}
            />
          </div>
        </div>

        {/* Actividades Sugeridas */}
        <div className="home-section">
          <div className="section-header">
            <h3 className="section-title">Actividades Sugeridas</h3>
            <Link to="/member/activities" className="section-link">
              Ver todas →
            </Link>
          </div>
          <div className="activities-preview-grid">
            {activitySuggestions.map((activity) => (
              <Link
                key={activity.id}
                to={`/member/activities?activity=${activity.id}`}
                className="activity-preview-card"
              >
                <div className="activity-preview-header">
                  <span className="activity-type-badge">{activity.type}</span>
                  <span className="activity-xp">{activity.xp} XP</span>
                </div>
                <h4 className="activity-preview-title">{activity.title}</h4>
                <p className="activity-preview-level">Nivel {activity.levelRecommended}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="home-section">
          <h3 className="section-title">{t('member.home.welcomeTitle') || 'Acceso Rápido'}</h3>
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

        {/* La Obra Real - Reminder Card */}
        <div className="home-welcome-card">
          <div className="welcome-icon">✨</div>
          <h3>La obra real</h3>
          <p>
            El estudio profundo te da lenguaje espiritual. Las actividades fortalecen tu capacidad de actuar. El
            progreso que importa es llevar luz a las personas, no solo subir de nivel.
          </p>
          <div className="welcome-quote">
            "Hablamos de Cristo, nos regocijamos en Cristo..." — esta área existe para que tu estudio te convierta en
            testigo diario.
          </div>
        </div>

        {/* Progress Summary Component */}
        <ProgressSummary />
      </div>
    </div>
  );
};

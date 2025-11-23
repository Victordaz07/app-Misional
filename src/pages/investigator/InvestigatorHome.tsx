import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useI18n } from '../../context/I18nContext';
import { useProgress } from '../../context/ProgressContext';
import { LESSONS } from '../../../data/lessonsData';
import { getDailyDevotional } from '../../data/devotionals';
import { CommitmentsService } from '../../services/commitmentsService';
import './Page.css';
import './HomePage.css';

const InvestigatorHome: React.FC = () => {
  const { userRole } = useAuth();
  const { locale, t } = useI18n();
  const { getOverallProgress, getCurrentLesson, progress } = useProgress();
  const [devotionalFeedback, setDevotionalFeedback] = useState<'felt' | 'confused' | null>(null);
  const [nextCommitment, setNextCommitment] = useState<{ id: string; text: string } | null>(null);

  const overallProgress = getOverallProgress();
  const completedLessons = overallProgress.completedLessons || 0;
  const totalLessons = overallProgress.totalLessons || 7;
  const progressPercent = overallProgress.percentage;

  const currentLessonData = getCurrentLesson();
  const currentLesson = currentLessonData ? LESSONS.find(l => l.id === currentLessonData.lessonId) : null;
  const firstLesson = LESSONS[0];

  const dailyDevotional = getDailyDevotional();

  // Cargar próximo compromiso
  useEffect(() => {
    const loadNextCommitment = async () => {
      const commitments = await CommitmentsService.loadCommitments();
      const pending = commitments.filter(c => !c.completed).sort((a, b) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      if (pending.length > 0) {
        setNextCommitment({ id: pending[0].id, text: pending[0].title });
      }
    };
    loadNextCommitment();
  }, []);

  const quickActions = [
    {
      icon: '📖',
      title: t('home.lessons'),
      description: t('home.lessonsDesc'),
      link: '/lessons',
      color: 'primary'
    },
    {
      icon: '📊',
      title: t('tabs.progress'),
      description: t('home.progressDesc'),
      link: '/progress',
      color: 'secondary'
    },
    {
      icon: '✅',
      title: t('home.tasks'),
      description: t('home.tasksDesc'),
      link: '/tasks',
      color: 'accent'
    },
    {
      icon: '💧',
      title: t('home.baptism'),
      description: t('home.baptismDesc'),
      link: '/baptism',
      color: 'info'
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('tabs.home')}</h1>
        <p>{t('home.welcome')}</p>
      </div>
      <div className="page-content">
        {/* Progress Card */}
        <div className="home-progress-card">
          <div className="progress-card-header">
            <div>
              <h2>{t('home.progress')}</h2>
              <p className="progress-subtitle">{completedLessons} {t('home.lessonsCompleted')} {totalLessons} {t('home.lessonsCompletedText')}</p>
              {currentLesson ? (
                <p className="progress-current-lesson">
                  {t('home.currentLesson')}: {currentLesson.title[locale]}
                </p>
              ) : (
                <p className="progress-current-lesson">
                  {t('home.startFirstLesson')}
                </p>
              )}
            </div>
            <div className="progress-percentage">{progressPercent}%</div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Resume Lesson Card */}
        {currentLesson ? (
          <Link to={`/lessons/${currentLesson.id}`} className="resume-lesson-card">
            <div className="resume-lesson-icon">📖</div>
            <div className="resume-lesson-content">
              <h3>{t('home.resumeLesson')}</h3>
              <p>{t('home.continueIn')}: {currentLesson.title[locale]}</p>
            </div>
            <div className="resume-lesson-arrow">→</div>
          </Link>
        ) : (
          <Link to={`/lessons/${firstLesson.id}`} className="resume-lesson-card">
            <div className="resume-lesson-icon">🚀</div>
            <div className="resume-lesson-content">
              <h3>{t('home.startJourney')}</h3>
              <p>{t('home.startWithLesson')}: {firstLesson.title[locale]}</p>
            </div>
            <div className="resume-lesson-arrow">→</div>
          </Link>
        )}

        {/* Daily Devotional */}
        <div className="devotional-card">
          <div className="devotional-header">
            <h3>{t('home.dailyMessage')}</h3>
          </div>
          <div className="devotional-content">
            <div className="devotional-scripture">
              <div className="scripture-ref">{dailyDevotional.scripture.ref}</div>
              <div className="scripture-text">{dailyDevotional.scripture.text[locale]}</div>
            </div>
            <div className="devotional-application">
              <p>{dailyDevotional.application[locale]}</p>
            </div>
            <div className="devotional-action">
              <strong>{t('home.todayAction')}:</strong> {dailyDevotional.action[locale]}
            </div>
            <div className="devotional-feedback">
              <button
                className={`feedback-button ${devotionalFeedback === 'felt' ? 'active' : ''}`}
                onClick={() => setDevotionalFeedback(devotionalFeedback === 'felt' ? null : 'felt')}
              >
                {t('home.feltSomething')}
              </button>
              <button
                className={`feedback-button ${devotionalFeedback === 'confused' ? 'active' : ''}`}
                onClick={() => setDevotionalFeedback(devotionalFeedback === 'confused' ? null : 'confused')}
              >
                {t('home.notUnderstood')}
              </button>
            </div>
          </div>
        </div>

        {/* Next Commitment Card */}
        {nextCommitment ? (
          <div className="next-commitment-card">
            <div className="commitment-header">
              <h3>{t('home.nextCommitment')}</h3>
            </div>
            <div className="commitment-content">
              <p className="commitment-text">{nextCommitment.text}</p>
              <Link to="/tasks" className="commitment-link">
                {t('home.viewAllCommitments')} →
              </Link>
            </div>
          </div>
        ) : (
          <div className="next-commitment-card empty">
            <div className="commitment-header">
              <h3>{t('home.nextCommitment')}</h3>
            </div>
            <div className="commitment-content">
              <p className="commitment-empty">{t('home.noCommitmentsYet')}</p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="home-section">
          <h3 className="section-title">{t('home.quickAccess')}</h3>
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
          <h3>{t('home.welcomeTitle')}</h3>
          <p>{t('home.welcomeMessage')}</p>
        </div>

        {/* Extra Modules */}
        <div className="home-section">
          <h3 className="section-title">{t('home.extraModules') || 'Recursos Adicionales'}</h3>
          <div className="quick-actions-grid">
            <Link to="/god-story" className="quick-action-card action-primary">
              <div className="action-icon">📖</div>
              <div className="action-content">
                <h4 className="action-title">{t('godStory.title') || 'Mi Historia con Dios'}</h4>
                <p className="action-description">{t('godStory.subtitle') || 'Registra tus experiencias espirituales'}</p>
              </div>
              <div className="action-arrow">→</div>
            </Link>
            <Link to="/difficult-questions" className="quick-action-card action-secondary">
              <div className="action-icon">❓</div>
              <div className="action-content">
                <h4 className="action-title">{t('difficultQuestions.title') || 'Preguntas Difíciles'}</h4>
                <p className="action-description">{t('difficultQuestions.subtitle') || 'Respuestas a preguntas comunes'}</p>
              </div>
              <div className="action-arrow">→</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorHome;


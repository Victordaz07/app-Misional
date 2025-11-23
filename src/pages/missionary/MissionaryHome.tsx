import React from 'react';
import { useI18n } from '../../context/I18nContext';
import './Page.css';

const MissionaryHome: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('tabs.home')}</h1>
        <p>{t('missionary.welcome')}</p>
      </div>
      <div className="page-content">
        <p>{t('missionary.homeMessage')}</p>
      </div>
    </div>
  );
};

export default MissionaryHome;


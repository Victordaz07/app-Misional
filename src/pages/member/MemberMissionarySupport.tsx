import React, { useMemo, useState } from 'react';
import '../Page.css';
import { useI18n } from '../../context/I18nContext';
import { getMemberSupportIdeas } from '../../utils/memberData';

// Type declaration for browser window
declare const window:
  | {
      alert: (message: string) => void;
    }
  | undefined;

const mockActivities = [
  {
    id: '1',
    title: 'Visita a la familia Rivera',
    date: 'Martes 19:00',
    need: 'Se necesitan 2 acompañantes',
  },
  {
    id: '2',
    title: 'Clase de inglés en la capilla',
    date: 'Jueves 18:30',
    need: 'Traer amigos e interactuar',
  },
  {
    id: '3',
    title: 'Noche de hogar con los López',
    date: 'Domingo 20:00',
    need: 'Familia anfitriona',
  },
];

const MemberMissionarySupport: React.FC = () => {
  const { t } = useI18n();
  const supportIdeas = useMemo(() => getMemberSupportIdeas(t), [t]);
  const [companionForm, setCompanionForm] = useState({
    name: '',
    availability: '',
    notes: '',
  });
  const [referralForm, setReferralForm] = useState({
    friendName: '',
    contact: '',
    notes: '',
  });

  const handleCompanionSubmit = () => {
    if (!companionForm.name.trim()) return;
    if (typeof window !== 'undefined' && window.alert) {
      window.alert(
        `${t('member.ui.offerCompanionship')}: ${companionForm.name}`,
      );
    }
    setCompanionForm({ name: '', availability: '', notes: '' });
  };

  const handleReferralSubmit = () => {
    if (!referralForm.friendName.trim()) return;
    if (typeof window !== 'undefined' && window.alert) {
      window.alert(
        `${t('member.ui.sendReferral')}: ${referralForm.friendName}`,
      );
    }
    setReferralForm({ friendName: '', contact: '', notes: '' });
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('member.supportMissionaries.title')}</h1>
        <p className="page-subtitle">{t('member.supportMissionaries.intro')}</p>
      </div>
      <div className="page-content">
        <div className="profile-card">
          <h2>{t('member.supportMissionaries.activitiesTitle')}</h2>
          <div className="friends-list">
            {mockActivities.map(activity => (
              <div key={activity.id} className="baptism-section-card">
                <div className="baptism-section-content">
                  <h3>{activity.title}</h3>
                  <p>{activity.date}</p>
                  <p>{activity.need}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-card">
          <h2>{t('member.ui.offerCompanionship')}</h2>
          <div className="form-group">
            <label>{t('member.supportMissionaries.form.name')}</label>
            <input
              type="text"
              value={companionForm.name}
              onChange={e =>
                setCompanionForm({
                  ...companionForm,
                  name: (e.target as any).value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label>{t('member.supportMissionaries.form.availability')}</label>
            <input
              type="text"
              value={companionForm.availability}
              onChange={e =>
                setCompanionForm({
                  ...companionForm,
                  availability: (e.target as any).value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label>{t('member.supportMissionaries.form.notes')}</label>
            <textarea
              rows={3}
              value={companionForm.notes}
              onChange={e =>
                setCompanionForm({
                  ...companionForm,
                  notes: (e.target as any).value,
                })
              }
            />
          </div>
          <button className="btn-primary" onClick={handleCompanionSubmit}>
            {t('member.ui.save')}
          </button>
        </div>

        <div className="profile-card">
          <h2>{t('member.ui.sendReferral')}</h2>
          <div className="form-group">
            <label>{t('member.supportMissionaries.form.friendName')}</label>
            <input
              type="text"
              value={referralForm.friendName}
              onChange={e =>
                setReferralForm({
                  ...referralForm,
                  friendName: (e.target as any).value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label>{t('member.supportMissionaries.form.contact')}</label>
            <input
              type="text"
              value={referralForm.contact}
              onChange={e =>
                setReferralForm({
                  ...referralForm,
                  contact: (e.target as any).value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label>{t('member.supportMissionaries.form.notes')}</label>
            <textarea
              rows={3}
              value={referralForm.notes}
              onChange={e =>
                setReferralForm({
                  ...referralForm,
                  notes: (e.target as any).value,
                })
              }
            />
          </div>
          <button className="btn-primary" onClick={handleReferralSubmit}>
            {t('member.ui.save')}
          </button>
        </div>

        <div className="profile-card">
          <h2>{t('member.supportMissionaries.howToHelpTitle')}</h2>
          <ul>
            {supportIdeas.howToHelp.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </div>

        <div className="profile-card">
          <h2>{t('member.supportMissionaries.attitudeBlock.title')}</h2>
          <ul>
            {supportIdeas.attitudePoints.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemberMissionarySupport;

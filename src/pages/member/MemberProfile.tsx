import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useI18n } from '../../context/I18nContext';
import { LanguagePicker } from '../../components/LanguagePicker';
import { Button } from '../../components/Button';
import { getMemberProfileFutureFields } from '../../utils/memberData';
import '../Page.css';

// Type declaration for browser window
declare const window:
  | {
      confirm: (message: string) => boolean;
      location: { href: string };
    }
  | undefined;

const MemberProfile: React.FC = () => {
  const { logout, login } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  const futureFields = useMemo(() => getMemberProfileFutureFields(t), [t]);

  const handleLogout = async () => {
    await logout();
  };

  const handleRoleChange = async (role: string) => {
    const confirmMessage = t('profile.changeRoleConfirm') || '¿Cambiar tu rol?';
    if (typeof window !== 'undefined' && window.confirm(confirmMessage)) {
      await login(role);
      if (role === 'member') {
        navigate('/member/home');
      } else {
        navigate('/home');
      }
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('tabs.profile')}</h1>
      </div>
      <div className="page-content">
        <div className="profile-section">
          <h2>{t('profile.currentRole') || 'Tu rol actual'}</h2>
          <p>{t('profile.roleDescription')}</p>
          <div className="role-switch-buttons">
            <Button
              title={t('profile.switchToInvestigator') || 'Modo Investigador'}
              variant="outline"
              onClick={() => handleRoleChange('investigator')}
            />
            <Button
              title={t('profile.switchToMissionary') || 'Modo Misionero'}
              variant="outline"
              onClick={() => handleRoleChange('missionary')}
            />
          </div>
        </div>
        <div className="profile-section">
          <LanguagePicker />
        </div>
        <div className="profile-section">
          <h2>{t('member.profilePrep.sectionTitle')}</h2>
          <p>{t('member.profilePrep.sectionDescription')}</p>
          <p>
            <strong>{t('member.profilePrep.futureFieldsDescription')}</strong>
          </p>
          <ul>
            {futureFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>{t('member.profilePrep.motivationText')}</p>
        </div>
        <div className="profile-section">
          <Button
            title={t('profile.logout')}
            onClick={handleLogout}
            variant="outline"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;

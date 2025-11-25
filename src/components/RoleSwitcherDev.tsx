import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StorageService } from '../utils/storage';
import './RoleSwitcherDev.css';

const IS_DEV = import.meta.env.DEV || import.meta.env.MODE === 'development';

export const RoleSwitcherDev: React.FC = () => {
  const navigate = useNavigate();

  if (!IS_DEV) {
    return null;
  }

  const handleRoleChange = (role: string) => {
    StorageService.setItem('userRole', role);
    
    // Navigate to appropriate home
    if (role === 'investigator') {
      navigate('/home', { replace: true });
    } else if (role === 'missionary') {
      navigate('/home', { replace: true });
    } else if (role === 'member') {
      navigate('/member/home', { replace: true });
    }
    
    // Force reload to update context
    window.location.reload();
  };

  return (
    <div className="role-switcher-dev">
      <span className="role-switcher-label">DEV:</span>
      <button
        className="role-switcher-btn"
        onClick={() => handleRoleChange('investigator')}
        title="Switch to Investigator role"
      >
        Investigador
      </button>
      <button
        className="role-switcher-btn"
        onClick={() => handleRoleChange('missionary')}
        title="Switch to Missionary role"
      >
        Misionero
      </button>
      <button
        className="role-switcher-btn active"
        onClick={() => handleRoleChange('member')}
        title="Switch to Member role"
      >
        Miembro
      </button>
    </div>
  );
};


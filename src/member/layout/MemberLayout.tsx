import React from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MemberHome } from '../pages/MemberHome';
import { StudyModulesPage } from '../pages/StudyModulesPage';
import { ActivitiesPage } from '../pages/ActivitiesPage';
import { ProgressPage } from '../pages/ProgressPage';
import { StudySectionView } from '../components/StudySectionView';
import { MemberConvertidosPage } from '../pages/MemberConvertidosPage';
import { RoleSwitcherDev } from '../../components/RoleSwitcherDev';
import MemberFriends from '../../pages/member/MemberFriends';
import MemberMissionarySupport from '../../pages/member/MemberMissionarySupport';

const navLinks = [
  { path: '/member/study', label: 'Estudiar', description: 'Texto revelador', primary: true },
  { path: '/member/convertidos', label: 'Convertidos', description: 'Cuidado de nuevos miembros' },
  { path: '/member/activities', label: 'Practicar', description: 'Actividades complementarias' },
  { path: '/member/progress', label: 'Progreso', description: 'XP y hábitos' },
];

export const MemberLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50">
      <RoleSwitcherDev />
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Miembro</p>
            <h1 className="text-3xl font-bold text-slate-900">Obrero en la viña</h1>
            <p className="text-sm text-slate-500">
              Primero estudio revelador, luego práctica intencional. La gamificación solo acompaña al discipulado.
            </p>
          </div>
          <div className="flex rounded-2xl border border-slate-200 bg-slate-100/60 p-1 text-sm font-semibold text-slate-600 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex-1 rounded-2xl px-4 py-2 text-center transition ${
                    isActive ? 'bg-white text-indigo-600 shadow' : 'hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-160px)] pb-16">
        <Routes>
          <Route path="/member" element={<MemberHome />} />
          <Route path="/member/home" element={<MemberHome />} />
          <Route path="/member/study" element={<StudyModulesPage />} />
          <Route path="/member/study/:moduleId" element={<StudySectionView />} />
          <Route path="/member/study/:moduleId/:sectionId" element={<StudySectionView />} />
          <Route path="/member/convertidos" element={<MemberConvertidosPage />} />
          <Route path="/member/activities" element={<ActivitiesPage />} />
          <Route path="/member/progress" element={<ProgressPage />} />
          <Route path="/member/friends" element={<MemberFriends />} />
          <Route path="/member/support" element={<MemberMissionarySupport />} />
          <Route path="*" element={<Navigate to="/member" replace />} />
        </Routes>
      </main>
    </div>
  );
};


import React from 'react';
import { useMemberProgressStore } from '../state/memberProgressStore';

const LEVEL_BOUNDARIES = [
  { level: 1, min: 0, max: 199 },
  { level: 2, min: 200, max: 499 },
  { level: 3, min: 500, max: 999 },
  { level: 4, min: 1000, max: Infinity },
];

const getCurrentLevelWindow = (level: number) => LEVEL_BOUNDARIES.find((entry) => entry.level === level) ?? LEVEL_BOUNDARIES[0];

export const ProgressSummary: React.FC = () => {
  const progress = useMemberProgressStore((state) => state.progress);

  const currentWindow = getCurrentLevelWindow(progress.level);
  const xpIntoLevel = Math.max(progress.xp - currentWindow.min, 0);
  const xpWindowSize = currentWindow.max === Infinity ? 400 : currentWindow.max - currentWindow.min + 1;
  const progressPercent = Math.min(100, Math.round((xpIntoLevel / xpWindowSize) * 100));
  const xpToNextLevel = currentWindow.max === Infinity ? '∞' : `${Math.max(currentWindow.max + 1 - progress.xp, 0)} XP`;

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-500">Progreso espiritual</p>
          <h2 className="text-3xl font-bold text-slate-900">Nivel {progress.level}</h2>
          <p className="text-sm text-slate-500">XP total: {progress.xp}</p>
        </div>
        <div className="rounded-2xl bg-indigo-50 px-4 py-2 text-center">
          <p className="text-xs uppercase tracking-wide text-indigo-700">Streak</p>
          <p className="text-2xl font-semibold text-indigo-900">{progress.streakDays} días</p>
        </div>
      </header>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Progreso del nivel actual</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="mt-2 h-3 rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
        <p className="mt-2 text-xs text-slate-400">
          XP restante para el siguiente nivel: <strong>{xpToNextLevel}</strong>
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
        Recuerda: los puntos te motivan, pero el objetivo es convertirte en un discípulo misionero más parecido a Cristo.
      </div>

      <section className="mt-6">
        <p className="text-sm font-semibold text-slate-600">Insignias obtenidas</p>
        {progress.earnedBadges.length === 0 ? (
          <p className="mt-2 text-sm text-slate-400">Aún no has desbloqueado insignias. Sigue estudiando y sirviendo.</p>
        ) : (
          <div className="mt-3 flex flex-wrap gap-3">
            {progress.earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="min-w-[160px] rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 shadow-sm"
              >
                <p className="font-semibold">{badge.name}</p>
                <p className="text-xs text-amber-700">{badge.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
};


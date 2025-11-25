import React, { useMemo } from 'react';
import { useMemberProgressStore } from '../state/memberProgressStore';
import { memberStudyModules } from '../data/memberStudyModules';
import { memberActivities } from '../data/memberActivities';
import { ProgressSummary } from '../components/ProgressSummary';
import { buildSectionProgressId } from '../utils/progressIds';

export const ProgressPage: React.FC = () => {
  const { progress, completedStudySectionIds } = useMemberProgressStore((state) => ({
    progress: state.progress,
    completedStudySectionIds: state.completedStudySectionIds,
  }));

  const completedSectionsList = useMemo(() => {
    const entries: { moduleTitle: string; sectionTitle: string }[] = [];
    memberStudyModules.forEach((module) => {
      module.sections.forEach((section) => {
        if (completedStudySectionIds.includes(buildSectionProgressId(module.id, section.id))) {
          entries.push({ moduleTitle: module.title, sectionTitle: section.title });
        }
      });
    });
    return entries;
  }, [completedStudySectionIds]);

  const completedActivities = useMemo(() => {
    return memberActivities.filter((activity) => progress.completedActivityIds.includes(activity.id));
  }, [progress.completedActivityIds]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Progreso integral</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Tu camino como miembro misionero</h1>
        <p className="mt-2 text-lg text-slate-600">
          Observa tu crecimiento. El progreso verdadero es espiritual, y estos indicadores solo te recuerdan lo que el
          Señor ya está haciendo en ti.
        </p>
      </header>

      <ProgressSummary />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-emerald-500">Estudio registrado</p>
              <h2 className="text-2xl font-semibold text-slate-900">{completedSectionsList.length} secciones</h2>
            </div>
            <span className="rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-600">Texto serio primero</span>
          </div>
          <div className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
            {completedSectionsList.length === 0 ? (
              <p className="text-sm text-slate-400">Aún no marcas secciones como estudiadas. Empieza en “Estudiar”.</p>
            ) : (
              completedSectionsList.map((entry) => (
                <div key={`${entry.moduleTitle}-${entry.sectionTitle}`} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">{entry.sectionTitle}</p>
                  <p className="text-xs text-slate-500">{entry.moduleTitle}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-indigo-500">Actividades completadas</p>
              <h2 className="text-2xl font-semibold text-slate-900">{completedActivities.length} prácticas</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-600">Motivación sana</span>
          </div>
          <div className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
            {completedActivities.length === 0 ? (
              <p className="text-sm text-slate-400">Todavía no terminas actividades. Revisa “Practicar”.</p>
            ) : (
              completedActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                >
                  <p className="font-semibold text-slate-900">{activity.title}</p>
                  <p className="text-xs text-slate-500">
                    {activity.type} · +{activity.xp} XP
                  </p>
                </div>
              ))
            )}
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Puedes repetir actividades para repasar, pero el XP solo se otorga una vez.
          </p>
        </div>
      </section>
    </div>
  );
};


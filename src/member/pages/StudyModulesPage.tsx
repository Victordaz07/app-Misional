import React, { useMemo } from 'react';
import { memberStudyModules } from '../data/memberStudyModules';
import { useMemberProgressStore } from '../state/memberProgressStore';
import { StudyModuleCard } from '../components/StudyModuleCard';

export const StudyModulesPage: React.FC = () => {
  const completedSections = useMemberProgressStore((state) => state.completedStudySectionIds);

  const orderedModules = useMemo(
    () =>
      [...memberStudyModules].sort((a, b) => {
        if (a.levelRecommended === b.levelRecommended) return a.title.localeCompare(b.title);
        return a.levelRecommended - b.levelRecommended;
      }),
    [],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Estudio profundo</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Módulos reveladores para miembros</h1>
        <p className="mt-3 text-lg text-slate-600">
          Empieza por el módulo que responda mejor a tu rol actual en la obra. Lee con calma, medita y toma notas. Marca
          cada sección estudiada para ver tu avance.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {orderedModules.map((module) => (
          <StudyModuleCard key={module.id} module={module} completedSectionIds={completedSections} />
        ))}
      </div>
    </div>
  );
};


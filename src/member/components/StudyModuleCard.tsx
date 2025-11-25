import React from 'react';
import { Link } from 'react-router-dom';
import { StudyModule } from '../data/types';
import { buildSectionProgressId } from '../utils/progressIds';

interface StudyModuleCardProps {
  module: StudyModule;
  completedSectionIds: string[];
}

export const StudyModuleCard: React.FC<StudyModuleCardProps> = ({ module, completedSectionIds }) => {
  const estimatedMinutes = module.sections.reduce((sum, section) => sum + section.estimatedMinutes, 0);
  const totalSections = module.sections.length;
  const completedSections = module.sections.filter((section) =>
    completedSectionIds.includes(buildSectionProgressId(module.id, section.id)),
  ).length;
  const progressPercent = totalSections === 0 ? 0 : Math.round((completedSections / totalSections) * 100);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400">Nivel recomendado {module.levelRecommended}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">{module.title}</h3>
          <p className="text-sm text-slate-500">{module.subtitle}</p>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {estimatedMinutes} min
        </div>
      </div>

      <p className="mt-4 text-slate-600">{module.description}</p>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Progreso</span>
          <span>
            {completedSections}/{totalSections} secciones
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/member/study/${module.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Abrir módulo
          <span aria-hidden>→</span>
        </Link>
        <span className="text-sm text-slate-500">Est. {estimatedMinutes} min totales</span>
      </div>
    </article>
  );
};


import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { memberStudyModules } from '../data/memberStudyModules';
import { useMemberProgressStore } from '../state/memberProgressStore';
import { buildSectionProgressId } from '../utils/progressIds';

export const StudySectionView: React.FC = () => {
  const { moduleId, sectionId } = useParams<{ moduleId: string; sectionId?: string }>();
  const navigate = useNavigate();
  const module = memberStudyModules.find((item) => item.id === moduleId);

  const firstSectionId = module?.sections[0]?.id;

  useEffect(() => {
    if (module && !sectionId && firstSectionId) {
      navigate(`/member/study/${module.id}/${firstSectionId}`, { replace: true });
    }
  }, [module, sectionId, firstSectionId, navigate]);

  const section = useMemo(() => {
    if (!module) return undefined;
    return module.sections.find((item) => item.id === sectionId) ?? module.sections[0];
  }, [module, sectionId]);

  const { completedStudySectionIds, markSectionStudied } = useMemberProgressStore((state) => ({
    completedStudySectionIds: state.completedStudySectionIds,
    markSectionStudied: state.markSectionStudied,
  }));

  if (!module || !section) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center text-rose-600">
          No encontramos ese módulo o sección. Vuelve al listado de estudio para seleccionar otro contenido.
        </div>
      </div>
    );
  }

  const sectionKey = buildSectionProgressId(module.id, section.id);
  const isCompleted = completedStudySectionIds.includes(sectionKey);

  const handleMarkStudied = () => {
    markSectionStudied(sectionKey);
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 lg:flex-row">
      <aside className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:max-w-xs">
        <p className="text-xs uppercase tracking-widest text-indigo-500">Secciones del módulo</p>
        <ol className="mt-4 space-y-3 text-sm">
          {module.sections.map((item, index) => {
            const key = buildSectionProgressId(module.id, item.id);
            const active = item.id === section.id;
            const completed = completedStudySectionIds.includes(key);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => navigate(`/member/study/${module.id}/${item.id}`)}
                  className={`w-full rounded-xl border px-3 py-2 text-left transition ${
                    active
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-transparent bg-slate-50 text-slate-600 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">#{index + 1}</span>
                    {completed && <span className="text-xs text-emerald-600">Estudiado</span>}
                  </div>
                  <p className="text-sm">{item.title}</p>
                </button>
              </li>
            );
          })}
        </ol>
      </aside>

      <article className="flex-1 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-400">Módulo</p>
            <h1 className="text-3xl font-bold text-slate-900">{module.title}</h1>
            <p className="text-slate-500">{module.subtitle}</p>
          </div>
          <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-600">
            {section.estimatedMinutes} min
          </span>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          {module.description}
        </div>

        <div className="prose prose-slate mt-8 max-w-none">
          <ReactMarkdown>{section.content}</ReactMarkdown>
        </div>

        <section className="mt-8">
          <p className="text-sm font-semibold text-slate-500">Referencias sugeridas</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {section.references.map((reference) => (
              <span
                key={`${reference.source}-${reference.type}`}
                className="inline-flex flex-col rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                <strong className="text-xs uppercase tracking-wide text-slate-400">{reference.type}</strong>
                <span className="font-medium">{reference.source}</span>
                {reference.title && <span className="text-xs text-slate-500">{reference.title}</span>}
                {reference.quote && <span className="text-xs text-slate-500">{reference.quote}</span>}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleMarkStudied}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-700 focus-visible:outline-emerald-300'
                : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
            }`}
            disabled={isCompleted}
          >
            {isCompleted ? 'Estudio registrado' : 'Marcar como estudiado (+5 XP)'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/member/study')}
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Volver al listado
          </button>
        </div>
      </article>
    </div>
  );
};


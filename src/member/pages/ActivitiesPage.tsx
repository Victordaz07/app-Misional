import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { memberActivities } from '../data/memberActivities';
import { memberStudyModules } from '../data/memberStudyModules';
import { ActivityRenderer } from '../components/ActivityRenderer';

const typeLabels: Record<string, string> = {
  QUIZ_SINGLE: 'Quiz doctrinal',
  SCENARIO: 'Situaciones reales',
  QUIZ_SCRIPTURE_MATCH: 'Escrituras para cada necesidad',
  CHARACTER_GUESS: 'Personajes y ejemplos',
  REAL_WORLD_MISSION: 'Misiones en la vida real',
  READING_BLOCK: 'Bloques de lectura',
};

export const ActivitiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedModuleId, setSelectedModuleId] = useState<string>('all');
  const [activeActivityId, setActiveActivityId] = useState<string | null>(searchParams.get('activity'));

  useEffect(() => {
    const activityParam = searchParams.get('activity');
    if (activityParam) {
      setActiveActivityId(activityParam);
    }
  }, [searchParams]);

  const filteredActivities = useMemo(() => {
    return memberActivities.filter((activity) => selectedModuleId === 'all' || activity.moduleId === selectedModuleId);
  }, [selectedModuleId]);

  const groupedByType = useMemo(() => {
    return filteredActivities.reduce<Record<string, typeof memberActivities>>((acc, activity) => {
      if (!acc[activity.type]) acc[activity.type] = [];
      acc[activity.type].push(activity);
      return acc;
    }, {});
  }, [filteredActivities]);

  const activeActivity = memberActivities.find((activity) => activity.id === activeActivityId) ?? null;

  const handleModuleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModuleId(event.target.value);
  };

  const handleSelectActivity = (activityId: string) => {
    setActiveActivityId(activityId);
    setSearchParams((params) => {
      params.set('activity', activityId);
      return params;
    });
  };

  const clearSelection = () => {
    setActiveActivityId(null);
    setSearchParams((params) => {
      params.delete('activity');
      return params;
    });
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 lg:flex-row">
      <section className="flex-1 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <header className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Practicar</p>
            <h1 className="text-3xl font-bold text-slate-900">Actividades interactivas</h1>
            <p className="text-sm text-slate-500">
              Usa estas dinámicas como complemento. Primero estudia, luego refuerza lo aprendido actuando.
            </p>
          </div>
          <label className="text-sm text-slate-600">
            Filtrar por módulo
            <select
              value={selectedModuleId}
              onChange={handleModuleChange}
              className="ml-3 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none"
            >
              <option value="all">Todos los módulos</option>
              {memberStudyModules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.title}
                </option>
              ))}
            </select>
          </label>
        </header>

        <div className="mt-6 space-y-6">
          {Object.entries(groupedByType).map(([type, activities]) => (
            <div key={type}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">{typeLabels[type] ?? type}</h2>
                <span className="text-xs text-slate-400">{activities.length} actividades</span>
              </div>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                {activities.map((activity) => (
                  <button
                    key={activity.id}
                    onClick={() => handleSelectActivity(activity.id)}
                    className={`rounded-2xl border px-4 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white ${
                      activeActivityId === activity.id ? 'border-indigo-500 bg-indigo-50' : 'border-slate-100 bg-slate-50'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-widest text-slate-400">{typeLabels[type] ?? type}</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">{activity.title}</h3>
                    <p className="text-sm text-slate-500">
                      {activity.xp} XP · Nivel {activity.levelRecommended}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full min-h-[400px] rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-inner lg:max-w-md">
        {activeActivity ? (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-600">Actividad seleccionada</p>
              <button
                type="button"
                onClick={clearSelection}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Cerrar
              </button>
            </div>
            <ActivityRenderer activity={activeActivity} />
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center text-slate-400">
            <p className="text-lg font-semibold">Selecciona una actividad</p>
            <p className="text-sm">Elige una tarjeta para abrirla aquí. Puedes repetirlas sin perder el enfoque del estudio.</p>
          </div>
        )}
      </section>
    </div>
  );
};


import React, { useMemo, useState } from 'react';
import {
  MemberActivity,
  QuizOption,
  QuizSingleActivity,
  ScenarioActivity,
  ScriptureMatchActivity,
  CharacterGuessActivity,
  RealWorldMissionActivity,
  ReadingBlockActivity,
} from '../data/activitiesTypes';
import { useMemberProgressStore } from '../state/memberProgressStore';

interface ActivityRendererProps {
  activity: MemberActivity;
}

const OptionButton: React.FC<{
  option: QuizOption;
  isSelected: boolean;
  onSelect: (optionId: string) => void;
  disabled?: boolean;
}> = ({ option, isSelected, onSelect, disabled }) => (
  <button
    type="button"
    disabled={disabled}
    onClick={() => onSelect(option.id)}
    className={`w-full rounded-2xl border px-4 py-3 text-left shadow-sm transition ${
      isSelected ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-700'
    } ${disabled ? 'opacity-70' : 'hover:border-indigo-300'}`}
  >
    <p className="font-semibold">{option.text}</p>
    {isSelected && option.feedback && <p className="mt-2 text-sm text-slate-500">{option.feedback}</p>}
  </button>
);

const renderQuiz = (
  activity: QuizSingleActivity | ScenarioActivity,
  selectedOption: string | null,
  setSelectedOption: (id: string) => void,
  disabled: boolean,
) => (
  <div className="space-y-3">
    {activity.options.map((option) => (
      <OptionButton
        key={option.id}
        option={option}
        isSelected={selectedOption === option.id}
        onSelect={setSelectedOption}
        disabled={disabled}
      />
    ))}
  </div>
);

const renderScriptureMatch = (
  activity: ScriptureMatchActivity,
  selectedId: string | null,
  setSelectedId: (id: string) => void,
  disabled: boolean,
) => (
  <div className="space-y-3">
    {activity.scriptures.map((scripture) => {
      const isSelected = scripture.id === selectedId;
      return (
        <button
          key={scripture.id}
          type="button"
          disabled={disabled}
          onClick={() => setSelectedId(scripture.id)}
          className={`w-full rounded-2xl border px-4 py-3 text-left shadow-sm transition ${
            isSelected ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-white text-slate-700'
          } ${disabled ? 'opacity-70' : 'hover:border-emerald-300'}`}
        >
          <p className="font-semibold">{scripture.reference}</p>
          <p className="text-sm text-slate-500">{scripture.text}</p>
          {isSelected && scripture.explanation && <p className="mt-2 text-xs text-slate-500">{scripture.explanation}</p>}
        </button>
      );
    })}
  </div>
);

const renderCharacterGuess = (
  activity: CharacterGuessActivity,
  selected: string | null,
  setSelected: (value: string) => void,
  disabled: boolean,
) => (
  <div className="space-y-3">
    {activity.options.map((option) => (
      <button
        key={option}
        type="button"
        disabled={disabled}
        onClick={() => setSelected(option)}
        className={`w-full rounded-2xl border px-4 py-3 text-left shadow-sm transition ${
          selected === option ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-slate-200 bg-white text-slate-700'
        } ${disabled ? 'opacity-70' : 'hover:border-amber-300'}`}
      >
        {option}
      </button>
    ))}
    {selected && (
      <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
        {selected === activity.correctName ? 'Respuesta correcta.' : 'Sigue intentándolo; revisa las pistas.'}
      </div>
    )}
  </div>
);

const renderRealWorldMission = (
  activity: RealWorldMissionActivity,
  reflection: string,
  setReflection: (value: string) => void,
  disabled: boolean,
) => (
  <div className="space-y-4">
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <h4 className="text-sm font-semibold text-slate-700">Instrucciones</h4>
      <p className="text-sm text-slate-600">{activity.instructions}</p>
    </div>
    {activity.reflectionPrompt && (
      <div>
        <p className="text-sm font-semibold text-slate-600">{activity.reflectionPrompt}</p>
        <textarea
          className="mt-2 w-full rounded-2xl border border-slate-200 p-3 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          rows={4}
          placeholder="Escribe tus impresiones..."
          value={reflection}
          onChange={(event) => setReflection(event.target.value)}
          disabled={disabled}
        />
      </div>
    )}
  </div>
);

const renderReadingBlock = (
  activity: ReadingBlockActivity,
  reflection: string,
  setReflection: (value: string) => void,
  disabled: boolean,
) => (
  <div className="space-y-4">
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
      {activity.content}
    </div>
    {activity.reflectionQuestion && (
      <div>
        <p className="text-sm font-semibold text-slate-600">{activity.reflectionQuestion}</p>
        <textarea
          className="mt-2 w-full rounded-2xl border border-slate-200 p-3 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          rows={3}
          placeholder="Registra tu reflexión..."
          value={reflection}
          onChange={(event) => setReflection(event.target.value)}
          disabled={disabled}
        />
      </div>
    )}
  </div>
);

export const ActivityRenderer: React.FC<ActivityRendererProps> = ({ activity }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [reflection, setReflection] = useState('');
  const [completionMessage, setCompletionMessage] = useState<string | null>(null);

  const progress = useMemberProgressStore((state) => state.progress);
  const completeActivity = useMemberProgressStore((state) => state.completeActivity);

  const isAlreadyCompleted = progress.completedActivityIds.includes(activity.id);

  const requiresChoice = useMemo(
    () => ['QUIZ_SINGLE', 'SCENARIO', 'QUIZ_SCRIPTURE_MATCH', 'CHARACTER_GUESS'].includes(activity.type),
    [activity.type],
  );

  const canFinish = useMemo(() => {
    if (isAlreadyCompleted) return true;
    if (requiresChoice) return Boolean(selectedOption);
    return true;
  }, [isAlreadyCompleted, requiresChoice, selectedOption]);

  const handleFinalize = () => {
    const { xpAwarded } = completeActivity(activity.id, activity.xp);
    setCompletionMessage(
      xpAwarded ? `¡Actividad completada! +${activity.xp} XP añadidos.` : 'Actividad ya completada anteriormente.',
    );
  };

  return (
    <section className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
      <header className="space-y-1">
        <p className="text-sm uppercase tracking-widest text-indigo-500">Actividad</p>
        <h2 className="text-2xl font-bold text-slate-900">{activity.title}</h2>
        {activity.description && <p className="text-sm text-slate-500">{activity.description}</p>}
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>XP: {activity.xp}</span>
          <span>Nivel sugerido: {activity.levelRecommended}</span>
        </div>
      </header>

      {activity.type === 'QUIZ_SINGLE' || activity.type === 'SCENARIO'
        ? renderQuiz(activity, selectedOption, setSelectedOption, isAlreadyCompleted)
        : null}

      {activity.type === 'QUIZ_SCRIPTURE_MATCH'
        ? renderScriptureMatch(activity, selectedOption, setSelectedOption, isAlreadyCompleted)
        : null}

      {activity.type === 'CHARACTER_GUESS'
        ? renderCharacterGuess(activity, selectedOption, setSelectedOption, isAlreadyCompleted)
        : null}

      {activity.type === 'REAL_WORLD_MISSION'
        ? renderRealWorldMission(activity, reflection, setReflection, isAlreadyCompleted)
        : null}

      {activity.type === 'READING_BLOCK'
        ? renderReadingBlock(activity, reflection, setReflection, isAlreadyCompleted)
        : null}

      <footer className="space-y-3 border-t border-slate-100 pt-4">
        {completionMessage && <div className="rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-700">{completionMessage}</div>}
        <button
          type="button"
          onClick={handleFinalize}
          disabled={!canFinish}
          className={`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            isAlreadyCompleted
              ? 'bg-emerald-500 text-white hover:bg-emerald-400 focus-visible:outline-emerald-600'
              : canFinish
                ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                : 'cursor-not-allowed bg-slate-200 text-slate-500'
          }`}
        >
          {isAlreadyCompleted ? 'Actividad completada' : `Finalizar actividad (+${activity.xp} XP)`}
        </button>
        {!isAlreadyCompleted && requiresChoice && !selectedOption && (
          <p className="text-center text-xs text-slate-400">Selecciona una respuesta antes de finalizar.</p>
        )}
      </footer>
    </section>
  );
};


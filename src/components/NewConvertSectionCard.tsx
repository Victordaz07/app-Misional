import React from 'react';
import type { NewConvertSection } from '../member/data/memberTypes';

interface BadgeLabels {
  bullets: string;
  scriptures: string;
  tips: string;
}

interface NewConvertSectionCardProps {
  section: NewConvertSection;
  completed: boolean;
  onOpen: () => void;
  badges: BadgeLabels;
  completedLabel: string;
  detailsLabel: string;
}

const truncateContent = (content: string, maxLength = 200) => {
  const plain = content.replace(/\s+/g, ' ').trim();
  if (plain.length <= maxLength) {
    return plain;
  }
  return `${plain.slice(0, maxLength)}…`;
};

export const NewConvertSectionCard: React.FC<NewConvertSectionCardProps> = ({
  section,
  completed,
  onOpen,
  badges,
  completedLabel,
  detailsLabel,
}) => {
  return (
    <article
      className={`flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm transition ${
        completed ? 'border-emerald-400' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
          {completed && (
            <p className="text-xs font-medium text-emerald-600" aria-live="polite">
              {completedLabel}
            </p>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-slate-600">{truncateContent(section.content)}</p>

      <div className="flex flex-wrap gap-2 text-xs text-slate-600">
        <span className="rounded-full bg-slate-100 px-3 py-1">{badges.bullets}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">{badges.scriptures}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">{badges.tips}</span>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onOpen}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          {detailsLabel}
        </button>
      </div>
    </article>
  );
};



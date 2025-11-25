import React, { useMemo, useState } from 'react';
import type { NewConvertSection } from '../data/memberTypes';
import { useNewConvertProgress } from '../../hooks/useNewConvertProgress';
import { useI18n, Locale } from '../../context/I18nContext';
import { NewConvertProgressBar } from '../../components/NewConvertProgressBar';
import { NewConvertSectionCard } from '../../components/NewConvertSectionCard';
import { newConvertGuideEs } from '../data/newConvertGuide.es';
import { newConvertGuideEn } from '../data/newConvertGuide.en';
import { newConvertGuideFr } from '../data/newConvertGuide.fr';
import { newConvertGuidePt } from '../data/newConvertGuide.pt';

const guidesByLocale: Record<Locale, NewConvertSection[]> = {
  es: newConvertGuideEs,
  en: newConvertGuideEn,
  fr: newConvertGuideFr,
  pt: newConvertGuidePt,
};

const getGuideForLocale = (locale: Locale): NewConvertSection[] => guidesByLocale[locale] ?? guidesByLocale.es;

export const MemberConvertidosPage: React.FC = () => {
  const { locale, t } = useI18n();
  const sections = useMemo(() => getGuideForLocale(locale), [locale]);
  const [activeSection, setActiveSection] = useState<NewConvertSection | null>(null);

  const { isCompleted, toggleSection, progress } = useNewConvertProgress(sections, null, locale);

  const pageTitle = t('member.convertidos.title');
  const pageSubtitle = t('member.convertidos.subtitle');
  const progressLabel = t('member.convertidos.progressLabel');
  const detailsLabel = t('member.convertidos.detailsButton');
  const completedLabel = t('member.convertidos.sectionStatus.completed');
  const inProgressLabel = t('member.convertidos.sectionStatus.inProgress');
  const bulletsTitle = t('member.convertidos.modal.bulletsTitle');
  const scripturesTitle = t('member.convertidos.modal.scripturesTitle');
  const tipsTitle = t('member.convertidos.modal.tipsTitle');
  const markComplete = t('member.convertidos.modal.markComplete');
  const markIncomplete = t('member.convertidos.modal.markIncomplete');
  const closeLabel = t('member.convertidos.modal.close');

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">Convertidos</p>
        <h1 className="text-3xl font-bold text-slate-900">{pageTitle}</h1>
        <p className="text-sm text-slate-600">{pageSubtitle}</p>
      </header>

      <NewConvertProgressBar value={progress} label={progressLabel} />

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <NewConvertSectionCard
            key={section.id}
            section={section}
            completed={isCompleted(section.id)}
            onOpen={() => setActiveSection(section)}
            completedLabel={completedLabel}
            detailsLabel={detailsLabel}
            badges={{
              bullets: t('member.convertidos.chips.bullets', {
                count: section.bullets?.length ?? 0,
              }),
              scriptures: t('member.convertidos.chips.scriptures', {
                count: section.scriptures?.length ?? 0,
              }),
              tips: t('member.convertidos.chips.tips', {
                count: section.tips?.length ?? 0,
              }),
            }}
          />
        ))}
      </div>

      {activeSection && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="convert-section-title"
        >
          <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex items-start justify-between gap-4 border-b px-6 py-4">
              <div>
                <h2 id="convert-section-title" className="text-xl font-semibold text-slate-900">
                  {activeSection.title}
                </h2>
                <p className="text-xs text-slate-500">
                  {isCompleted(activeSection.id) ? completedLabel : inProgressLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveSection(null)}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-200"
              >
                {closeLabel}
              </button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5 text-sm leading-relaxed text-slate-700">
              <p className="whitespace-pre-line">{activeSection.content}</p>

              {activeSection.bullets?.length ? (
                <section>
                  <h3 className="text-sm font-semibold text-slate-900">{bulletsTitle}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                    {activeSection.bullets.map((bullet, index) => (
                      <li key={`${activeSection.id}-bullet-${index}`}>{bullet}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {activeSection.scriptures?.length ? (
                <section>
                  <h3 className="text-sm font-semibold text-slate-900">{scripturesTitle}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {activeSection.scriptures.map((scripture, index) => (
                      <li key={`${activeSection.id}-scripture-${index}`}>
                        <span className="font-semibold">{scripture.ref}</span>
                        {scripture.note && <p className="text-xs text-slate-500">{scripture.note}</p>}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {activeSection.tips?.length ? (
                <section>
                  <h3 className="text-sm font-semibold text-slate-900">{tipsTitle}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {activeSection.tips.map((tip, index) => (
                      <li key={`${activeSection.id}-tip-${index}`}>{tip}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            <div className="flex items-center justify-between border-t px-6 py-4">
              <button
                type="button"
                onClick={() => toggleSection(activeSection.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  isCompleted(activeSection.id)
                    ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border border-slate-200 bg-slate-50 text-slate-700'
                }`}
              >
                {isCompleted(activeSection.id) ? markIncomplete : markComplete}
              </button>
              <button
                type="button"
                onClick={() => setActiveSection(null)}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
              >
                {closeLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



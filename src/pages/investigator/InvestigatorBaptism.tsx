import React, { useState } from 'react';
import { useI18n } from '../../context/I18nContext';
import './Page.css';
import './BaptismPage.css';

const InvestigatorBaptism: React.FC = () => {
  const { t } = useI18n();
  const [expandedSection, setExpandedSection] = useState<string | null>('section1');

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 'section1',
      titleKey: 'baptism.section1.title',
      contentKey: 'baptism.section1.content',
    },
    {
      id: 'section2',
      titleKey: 'baptism.section2.title',
      contentKey: 'baptism.section2.content',
    },
    {
      id: 'section3',
      titleKey: 'baptism.section3.title',
      contentKey: 'baptism.section3.content',
    },
    {
      id: 'section4',
      titleKey: 'baptism.section4.title',
      contentKey: 'baptism.section4.content',
    },
    {
      id: 'section5',
      titleKey: 'baptism.section5.title',
      contentKey: 'baptism.section5.content',
    },
  ];

  const faqItems = [
    { q: 'baptism.faq1.q', a: 'baptism.faq1.a' },
    { q: 'baptism.faq2.q', a: 'baptism.faq2.a' },
    { q: 'baptism.faq3.q', a: 'baptism.faq3.a' },
    { q: 'baptism.faq4.q', a: 'baptism.faq4.a' },
    { q: 'baptism.faq5.q', a: 'baptism.faq5.a' },
    { q: 'baptism.faq6.q', a: 'baptism.faq6.a' },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t('tabs.baptism')}</h1>
        <p>{t('baptism.subtitle') || 'Preparación para el bautismo'}</p>
      </div>
      <div className="page-content">
        {sections.map((section) => {
          const isExpanded = expandedSection === section.id;
          return (
            <div key={section.id} className="baptism-section-card">
              <div
                className="baptism-section-header"
                onClick={() => toggleSection(section.id)}
              >
                <h2>{t(section.titleKey)}</h2>
                <span className="section-toggle">{isExpanded ? '▼' : '▶'}</span>
              </div>
              {isExpanded && (
                <div className="baptism-section-content">
                  <p>{t(section.contentKey)}</p>
                </div>
              )}
            </div>
          );
        })}

        {/* Preguntas Frecuentes */}
        <div className="baptism-faq-section">
          <h2>{t('baptism.faqTitle') || 'Preguntas Frecuentes'}</h2>
          <div className="faq-list">
            {faqItems.map((faq, index) => {
              const faqId = `faq${index + 1}`;
              const isExpanded = expandedSection === faqId;
              return (
                <div key={faqId} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleSection(faqId)}
                  >
                    <h3>{t(faq.q)}</h3>
                    <span className="faq-toggle">{isExpanded ? '▼' : '▶'}</span>
                  </div>
                  {isExpanded && (
                    <div className="faq-answer">
                      <p>{t(faq.a)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorBaptism;

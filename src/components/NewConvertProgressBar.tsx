import React from 'react';

interface NewConvertProgressBarProps {
  value: number;
  label?: string;
}

export const NewConvertProgressBar: React.FC<NewConvertProgressBarProps> = ({ value, label }) => {
  const pct = Math.round(Math.max(0, Math.min(1, value || 0)) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-slate-700">
        <span>{label}</span>
        <span className="text-xs text-slate-500">{pct}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};



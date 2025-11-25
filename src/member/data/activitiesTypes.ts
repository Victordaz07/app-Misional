export type MemberActivityType =
  | 'scripture-quiz'
  | 'scenario-quiz'
  | 'character-guess'
  | 'companion-practice'
  | 'service-challenge'
  | 'reflection-journal';

export type ActivityDifficulty = 'easy' | 'medium' | 'hard';

export interface ActivityReward {
  xp: number;
  badge: string;
}

export interface ActivityQuestion {
  id: string;
  prompt: string;
  options?: string[];
  correctOptionIndex?: number;
  explanation?: string;
  scriptureReference?: string;
}

export interface MemberActivity {
  id: string;
  title: string;
  type: MemberActivityType;
  difficulty: ActivityDifficulty;
  recommendedAfterModules: string[];
  estimatedMinutes: number;
  description: string;
  studyHint?: string;
  reward: ActivityReward;
  questions: ActivityQuestion[];
}


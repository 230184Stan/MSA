export type Role = 'admin' | 'club_manager' | 'referee' | 'public';

export type RegistrationStatus = 'active' | 'ended' | 'suspended';
export type MoveType = 'up' | 'down' | 'transfer';
export type MoveStatus =
  | 'requested'
  | 'club_approved'
  | 'admin_approved'
  | 'completed'
  | 'rejected';
export type MatchStatus =
  | 'scheduled'
  | 'live'
  | 'completed'
  | 'postponed'
  | 'forfeit';
export type EventType = 'goal' | 'yellow_card' | 'red_card' | 'substitution';

export interface Division {
  id: string;
  name: string;
  gender_rule: 'male' | 'female' | 'any' | null;
  max_age: number | null;
  level: number | null;
  created_at: string;
}

export interface Club {
  id: string;
  name: string;
  founded: number | null;
  contact: string | null;
  created_at: string;
}

export interface Team {
  id: string;
  club_id: string;
  name: string;
  division_id: string | null;
  created_at: string;
}

export interface Season {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  cut_off_date: string | null;
  is_current: boolean;
  created_at: string;
}

export interface Competition {
  id: string;
  season_id: string;
  division_id: string;
  name: string;
  created_at: string;
}

export interface StandingRow {
  competition_id: string;
  team_id: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  points: number;
}

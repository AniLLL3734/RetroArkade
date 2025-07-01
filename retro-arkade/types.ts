
import { Session, User } from '@supabase/supabase-js';

export enum GameType {
  SWF = 'swf',
  HTML5 = 'html5',
}

export interface Game {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  type: GameType;
  path: string;
  instructions: string;
  category: string;
  width?: number;
  height?: number;
}

export interface Profile {
  id: string;
  username: string;
  avatar_url?: string;
}

export interface HighScore {
  id: number;
  game_id: string;
  user_id: string;
  score: number;
  created_at: string;
  profiles: {
    username: string;
  };
}

export interface Comment {
  id: number;
  game_id: string;
  user_id: string;
  content: string;
  created_at: string;
  profiles: {
    username: string;
  };
}

export interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signOut: () => void;
}

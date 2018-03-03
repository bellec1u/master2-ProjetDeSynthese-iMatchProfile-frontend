import {User} from './user';

export interface Notification {
    id?: string;
    link: string;
    message: string;
    state: boolean;
    user: User;
  }
  
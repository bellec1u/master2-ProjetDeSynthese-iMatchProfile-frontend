import {User} from './user';

export interface Recruiter {
  id?: string;
  user: User;
  company: string;
}

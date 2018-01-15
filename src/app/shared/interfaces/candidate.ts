import {User} from './user';
import {Skill} from './skill';

export interface Candidate {
    id?: string;
    user: User;
    birthDate?: string;
    description?: string;
    photo?: string;
    skills: Skill[];
}

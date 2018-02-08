import {User} from './user';
import {Skill} from './skill';
import {Education} from './education';

export interface Candidate {
    id?: string;
    user: User;
    birthDate?: string;
    description?: string;
    photo?: string;
    skills: Skill[];
    educations: Education[];
}

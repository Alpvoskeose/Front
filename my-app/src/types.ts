export interface User {
    name: string;
    email: string;
    age: number;
}

export type SkillLavel = 
'Beginner' |
'Intermediate' |
'Advanced';

export interface Skill {
    id: number;
    name: string;
    lavel: SkillLavel;
}

export interface User {
    name: string;
    email: string;
    age: number;
}
import type { Skill, SkillLevel } from './types';

interface SkillListProps {
  skills: Skill[];
}


const colors: Record<SkillLevel, string> = {
  Beginner: '#e0f7fa',
  Intermediate: '#fff9c4', 
  Expert: '#ffccbc'       
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li 
          key={skill.id} 
          style={{ backgroundColor: colors[skill.level], margin: '5px', padding: '5px' }}
        >
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
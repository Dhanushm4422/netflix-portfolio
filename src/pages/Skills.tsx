import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import { Skill } from '../types';

// Icons
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJava, FaBrain, FaHandsHelping, FaBriefcase, FaCode } from 'react-icons/fa';
import { SiJavascript, SiPhp, SiSpring, SiMysql, SiMongodb, SiExpress, SiHtml5, SiCss3, SiBootstrap, SiJenkins, SiOracle, SiGooglecloud, SiTypescript, SiTailwindcss, SiThingiverse } from 'react-icons/si';

// Icon mapping
const iconMap: { [key: string]: JSX.Element } = {
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiPhp: <SiPhp />,
  SiSpring: <SiSpring />,
  SiMysql: <SiMysql />,
  SiMongodb: <SiMongodb />,
  SiExpress: <SiExpress />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiBootstrap: <SiBootstrap />,
  FaGitAlt: <FaGitAlt />,
  FaDocker: <FaDocker />,
  SiJenkins: <SiJenkins />,
  FaCode: <FaCode />,
  FaBrain: <FaBrain />,
  FaHandsHelping: <FaHandsHelping />,
  FaBriefcase: <FaBriefcase />,
  SiOracle: <SiOracle />,
  SiGooglecloud: <SiGooglecloud />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  SiThingiverse: <SiThingiverse />,
};

// Fallback icon
const fallbackIcon = <FaCode />;

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkills();
        setSkillsData(data);
      } catch (err) {
        setError('Failed to fetch skills data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (skillsData.length === 0) return <div>No skills found.</div>;

  // Group skills by category
  const skillsByCategory: { [key: string]: Skill[] } = skillsData.reduce((acc: { [key: string]: Skill[] }, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Custom category order to ensure "Cloud Platforms" comes after "Frontend Development"
  const categoryOrder = [
    'Programming Languages',
    'Backend Development',
    'Frontend Development',
    'Databases',
    'Cloud Platforms',
    'DevOps',
    'Version Control',
    'AI/ML',
    'Project Management',
    'Development',
  ];

  const sortedCategories = Object.keys(skillsByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    return indexA - indexB;
  });

  return (
    <div className="skills-container">
      {sortedCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || fallbackIcon}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
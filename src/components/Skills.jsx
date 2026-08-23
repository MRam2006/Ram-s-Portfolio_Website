import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Sparkles, LineChart, Layout, CloudLightning, Wrench } from 'lucide-react';
import { 
  SiHuggingface, 
  SiLangchain, 
  SiQdrant, 
  SiMeta, 
  SiCrewai, 
  SiAnthropic,
  SiPython,
  SiPostgresql,
  SiScikitlearn,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman
} from 'react-icons/si';
import { RiOpenaiFill } from 'react-icons/ri';
import { TbBrandOpenai, TbApi } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';

const categoryIcons = {
  genai: Sparkles,
  ml: LineChart,
  web: Layout,
  cloud: CloudLightning,
  tools: Wrench,
};

const skillIconMap = {
  // Generative AI & NLP
  'Transformers': { Icon: SiHuggingface, color: '#FFD21E' },
  'LLMs': { Icon: RiOpenaiFill, color: '#10A37F' },
  'Prompt Engineering': { Icon: TbBrandOpenai, color: '#74AA9C' },
  'RAG': { Icon: SiLangchain, color: '#13B08C' },
  'Vector Databases': { Icon: SiQdrant, color: '#FF2E63' },
  'Similarity Search': { Icon: SiMeta, color: '#0081FB' },
  'Agentic AI': { Icon: SiCrewai, color: '#FF5E5B' },
  'MCP': { Icon: SiAnthropic, color: '#CC785C' },

  // Machine Learning / Data
  'Python': { Icon: SiPython, color: '#3776AB' },
  'SQL': { Icon: SiPostgresql, color: '#4169E1' },
  'Machine Learning': { Icon: SiScikitlearn, color: '#F7931E' },
  'Deep Learning': { Icon: SiPytorch, color: '#EE4C2C' },
  'Pandas': { Icon: SiPandas, color: '#E70488' },
  'Word2Vec / Embeddings': { Icon: SiNumpy, color: '#4DABCF' },

  // Web Development
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { Icon: SiExpress, color: '#FFFFFF' },
  'MongoDB': { Icon: SiMongodb, color: '#47A248' },
  'REST APIs': { Icon: TbApi, color: '#00FFD5' },
  'JWT': { Icon: SiJsonwebtokens, color: '#D63AFF' },

  // AWS Cloud
  'EC2': { Icon: FaAws, color: '#FF9900' },
  'S3': { Icon: FaAws, color: '#FF9900' },
  'IAM': { Icon: FaAws, color: '#FF9900' },
  'VPC': { Icon: FaAws, color: '#FF9900' },
  'RDS': { Icon: FaAws, color: '#FF9900' },
  'Lambda': { Icon: FaAws, color: '#FF9900' },

  // Tools & Platforms
  'Git': { Icon: SiGit, color: '#F05032' },
  'GitHub': { Icon: SiGithub, color: '#FFFFFF' },
  'Figma': { Icon: SiFigma, color: '#F24E1E' },
  'Postman': { Icon: SiPostman, color: '#FF6C37' },
  'VS Code': { Icon: VscVscode, color: '#007ACC' }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('genai');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const selectedCategory = skillsCategories.find((cat) => cat.id === activeTab) || skillsCategories[0];

  return (
    <section id="skills" aria-labelledby="skills-heading" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 id="skills-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800' }}>
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '12px auto 0' }}>
            A structured breakdown of expertise across Generative AI, machine learning, full-stack development, and cloud engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Skill categories"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {skillsCategories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Sparkles;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`skills-panel-${cat.id}`}
                id={`skills-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: isActive ? '1px solid var(--accent-green)' : '1px solid var(--border-green)',
                  background: isActive ? 'var(--accent-green-muted)' : 'var(--bg-card)',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 0 16px rgba(34, 197, 94, 0.2)' : 'none',
                }}
              >
                <IconComponent size={16} color={isActive ? 'var(--accent-green)' : 'var(--text-muted)'} aria-hidden="true" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Minimal Logo Grid Panel */}
        <div
          role="tabpanel"
          id={`skills-panel-${selectedCategory.id}`}
          aria-labelledby={`skills-tab-${selectedCategory.id}`}
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            minHeight: '120px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            {selectedCategory.skills.map((skill) => {
              const iconObj = skillIconMap[skill.name] || { Icon: FaAws, color: '#FF9900' };
              const IconComponent = iconObj.Icon;
              const iconColor = iconObj.color;
              const isHovered = hoveredSkill === skill.name;

              return (
                <div
                  key={skill.name}
                  role="img"
                  aria-label={skill.name}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onFocus={() => setHoveredSkill(skill.name)}
                  onBlur={() => setHoveredSkill(null)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '68px',
                    height: '68px',
                    borderRadius: '12px',
                    background: isHovered ? 'rgba(34, 197, 94, 0.08)' : 'var(--bg-card)',
                    border: isHovered ? '1.5px solid var(--accent-green)' : '1px solid var(--border-green)',
                    boxShadow: isHovered ? '0 8px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(34, 197, 94, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
                    transform: isHovered ? 'translateY(-3px) scale(1.04)' : 'translateY(0) scale(1)',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <IconComponent 
                    size={32} 
                    color={isHovered ? iconColor : 'var(--text-secondary)'} 
                    style={{ 
                      transition: 'all 0.2s ease',
                      filter: isHovered ? `drop-shadow(0 0 6px ${iconColor}50)` : 'none',
                    }} 
                    aria-hidden="true"
                  />
                  
                  {/* Tooltip */}
                  <div
                    role="tooltip"
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 10px)',
                      left: '50%',
                      transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(4px)',
                      background: 'rgba(10, 15, 11, 0.96)',
                      color: 'var(--text-primary)',
                      padding: '5px 11px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.01em',
                      whiteSpace: 'nowrap',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
                      pointerEvents: 'none',
                      opacity: isHovered ? 1 : 0,
                      visibility: isHovered ? 'visible' : 'hidden',
                      transition: 'opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease',
                      zIndex: 100,
                    }}
                  >
                    {skill.name}
                    <span
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '4px solid transparent',
                        borderRight: '4px solid transparent',
                        borderTop: '5px solid rgba(34, 197, 94, 0.4)',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


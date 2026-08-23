import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'UI/UX Design', value: 'uiux' },
    { label: 'GenAI / RAG / NLP', value: 'genai' },
    { label: 'ML / Sentiment', value: 'ml' },
    { label: 'Agentic AI / MCP', value: 'agentic' },
    { label: 'Deep Learning', value: 'deeplearning' },
    { label: 'MERN / AWS', value: 'mern' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.catFilter === filter || (filter === 'mern' && (p.catFilter === 'mern' || p.catFilter === 'cloud')));

  return (
    <section id="projects" aria-labelledby="projects-heading" style={{ padding: '100px 0', position: 'relative', zIndex: 1, background: 'var(--bg-section)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 id="projects-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '650px', margin: '12px auto 0' }}>
            Real-world implementations spanning UI/UX Figma designs, RAG pipelines, sentiment benchmarking, agentic systems, deep learning research, MERN applications, and AWS cloud infrastructure.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Project filters"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = filter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(tab.value)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: isActive ? '1px solid var(--accent-green)' : '1px solid var(--border-green)',
                  background: isActive ? 'var(--accent-green)' : 'var(--bg-card)',
                  color: isActive ? '#050805' : 'var(--text-secondary)',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
            gap: '28px',
          }}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {project.image && (
                  <div
                    style={{
                      width: '100%',
                      height: '190px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      marginBottom: '18px',
                      background: 'rgba(5, 8, 5, 0.8)',
                      border: '1px solid var(--border-green)',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} UI overview`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(5, 8, 5, 0.88)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid var(--border-green)',
                        borderRadius: '8px',
                        padding: '4px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.725rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <FigmaIcon size={12} /> Figma
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: 'var(--accent-green)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {project.category}
                  </span>
                  {project.badge && (
                    <span style={{ background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', color: 'var(--accent-green)', padding: '3px 10px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '700' }}>
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px', lineHeight: '1.4' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                  {project.shortDesc}
                </p>

                {project.metrics && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                    {project.metrics.slice(0, 4).map((m) => (
                      <div
                        key={`${project.id}-${m.label}`}
                        style={{
                          background: 'var(--bg-card-secondary)',
                          border: '1px solid var(--border-green)',
                          borderRadius: '8px',
                          padding: '8px 12px',
                        }}
                      >
                        <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--accent-green)' }}>{m.val}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '600' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {project.tech.map((t) => (
                    <span
                      key={`${project.id}-${t}`}
                      style={{
                        background: 'var(--accent-green-muted)',
                        border: '1px solid var(--border-green)',
                        color: 'var(--text-secondary)',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-green)' }}>
                {project.figmaUrl ? (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent-green)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                    }}
                    aria-label={`View Figma Design for ${project.title}`}
                  >
                    <FigmaIcon size={16} aria-hidden="true" /> View Figma Design
                  </a>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    <GithubIcon size={16} aria-hidden="true" /> Source Code
                  </a>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-green)',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  Details <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

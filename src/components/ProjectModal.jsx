import React from 'react';
import { X, ExternalLink, Sparkles, Cpu, Image as ImageIcon } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const hasLiveDemo = project.live && project.live !== '#';
  const hasImage = project.image || (project.gallery && project.gallery.length > 0);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative',
          border: '1px solid var(--border-green-glow)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-card-secondary)',
            border: '1px solid var(--border-green)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <span className="glow-badge" style={{ fontSize: '0.75rem' }}>
            {project.category}
          </span>
          {project.badge && (
            <span style={{ background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', color: 'var(--accent-green)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              {project.badge}
            </span>
          )}
        </div>

        <h2 id="project-modal-title" style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: '1.3', paddingRight: '40px' }}>
          {project.title}
        </h2>

        {hasImage && (
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: '700', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ImageIcon size={16} color="var(--accent-green)" aria-hidden="true" /> Design Overview & Screen Gallery
            </h3>
            <div
              style={{
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border-green)',
                background: '#070b08',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={project.image || project.gallery[0]}
                alt={`${project.title} Design Overview Gallery`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '380px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
        )}

        {project.metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', margin: '20px 0 24px' }}>
            {project.metrics.map((m) => (
              <div key={`${project.id}-${m.label}`} style={{ background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--accent-green)' }}>{m.val}</div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: '600' }}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '24px' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="var(--accent-green)" aria-hidden="true" /> Overview & Architecture
          </h3>
          <p>{project.longDesc}</p>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} color="var(--accent-green)" aria-hidden="true" /> Technologies & Tools
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((t) => (
              <span
                key={`${project.id}-${t}`}
                style={{
                  background: 'var(--bg-card-secondary)',
                  border: '1px solid var(--border-green)',
                  color: 'var(--accent-green)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '0.825rem',
                  fontWeight: '600',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-green)' }}>
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
              aria-label={`View Figma Design for ${project.title}`}
            >
              <FigmaIcon size={18} aria-hidden="true" />
              View Figma Design
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
              aria-label={`View source code for ${project.title}`}
            >
              <GithubIcon size={18} aria-hidden="true" />
              View Source Code
            </a>
          )}

          {hasLiveDemo && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink size={18} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


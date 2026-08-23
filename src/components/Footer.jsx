import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialStyle = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: '1px solid var(--border-green)',
    background: 'var(--bg-card-secondary)',
    transition: 'border-color 0.2s ease, color 0.2s ease',
  };

  return (
    <footer
      style={{
        padding: '50px 0 30px',
        borderTop: '1px solid var(--border-green)',
        background: 'var(--bg-secondary)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px', paddingBottom: '30px' }}>
          <div>
            <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }} aria-label="Back to home">
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#050805',
                  fontWeight: 'bold',
                }}
                aria-hidden="true"
              >
                <Code2 size={16} />
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                Ramakrishnan <span style={{ color: 'var(--accent-green)' }}>M</span>
              </span>
            </a>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              {personalInfo.role}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={socialStyle} aria-label="Visit GitHub profile">
              <GithubIcon size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={socialStyle} aria-label="Visit LinkedIn profile">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} style={socialStyle} aria-label={`Send email to ${personalInfo.email}`}>
              <Mail size={20} />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              background: 'var(--accent-green-muted)',
              border: '1px solid var(--border-green)',
              borderRadius: '10px',
              padding: '10px',
              color: 'var(--accent-green)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowUp size={20} aria-hidden="true" />
          </button>
        </div>

        <div style={{ borderTop: '1px solid var(--border-green)', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Ramakrishnan M. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

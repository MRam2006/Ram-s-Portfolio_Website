import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal } from 'lucide-react';
import { viewResume } from '../utils/resume';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Internships', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const sectionIds = navLinks.map((link) => link.href.substring(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenterY = window.scrollY + window.innerHeight / 2;
      const viewportCenterX = window.innerWidth / 2;
      let closestId = 'home';
      let closestScore = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!isVisible) return;

        const elementCenterY = window.scrollY + rect.top + rect.height / 2;
        const elementCenterX = rect.left + rect.width / 2;
        const distanceY = Math.abs(viewportCenterY - elementCenterY);
        const distanceX = Math.abs(viewportCenterX - elementCenterX);
        const score = distanceY + distanceX * 0.35;

        if (score < closestScore) {
          closestScore = score;
          closestId = id;
        }
      });

      setActiveSection(closestId);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);
    window.setTimeout(updateActiveSection, 150);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className={scrolled ? 'lab-nav' : ''}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.25s ease',
          padding: scrolled ? '10px 24px' : '18px 32px',
          backgroundColor: scrolled ? undefined : 'rgba(8, 10, 12, 0.65)',
          backdropFilter: scrolled ? undefined : 'blur(8px)',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Monogram */}
          <a
            href="#home"
            aria-label="Go to home section"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '4px',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-green)',
                transition: 'border-color 0.2s ease',
              }}
              aria-hidden="true"
            >
              <Terminal size={16} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--text-white)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  RAMAKRISHNAN <span style={{ color: 'var(--accent-green)' }}>M</span>
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--accent-green)',
                    background: 'var(--accent-green-dim)',
                    border: '1px solid var(--accent-green-border)',
                    padding: '1px 5px',
                    borderRadius: '2px',
                    letterSpacing: '0.04em',
                  }}
                >
                  ENGINEER
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span className="status-dot" style={{ width: '5px', height: '5px' }} aria-hidden="true" />
                <span>Generative AI & Full-Stack</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span>Dindigul, India</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'none', alignItems: 'center', gap: '14px' }} className="md-flex">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(14, 18, 22, 0.7)',
                padding: '4px 6px',
                borderRadius: '4px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: isActive ? '600' : '500',
                      color: isActive ? 'var(--text-white)' : 'var(--text-secondary)',
                      padding: '5px 10px',
                      borderRadius: '3px',
                      background: isActive ? 'var(--bg-surface-elevated)' : 'transparent',
                      border: isActive ? '1px solid var(--border-medium)' : '1px solid transparent',
                      transition: 'all 0.15s ease',
                      position: 'relative',
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Resume Button */}
            <button
              type="button"
              onClick={viewResume}
              className="btn-primary"
              style={{ padding: '7px 14px', fontSize: '0.8rem' }}
              aria-label="View resume in a new tab"
            >
              <FileText size={14} aria-hidden="true" />
              Resume
            </button>
          </div>

          {/* Mobile Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="md-hidden">
            <button
              type="button"
              onClick={viewResume}
              className="btn-primary"
              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
              aria-label="View resume"
            >
              <FileText size={13} aria-hidden="true" />
              Resume
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '7px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            id="mobile-nav-menu"
            className="animate-fade-in"
            style={{
              marginTop: '12px',
              padding: '16px',
              borderRadius: '4px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
            }}
          >
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    color: isActive ? 'var(--text-white)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--bg-surface-elevated)' : 'transparent',
                    border: isActive ? '1px solid var(--accent-green-border)' : '1px solid transparent',
                    fontWeight: isActive ? '600' : '500',
                    fontSize: '0.875rem',
                    display: 'block',
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

import React from 'react';
import { personalInfo } from '../data/portfolioData';
import profilePic from '../assets/profile.jpg';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Engineering Profile Overview"
      className="tech-grid-bg hero-editorial-section"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        
        {/* Editorial 2-Column Grid */}
        <div className="hero-editorial-grid">
          
          {/* Left Column: Dominant Typographic Hierarchy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            {/* Dominant Name & Prominent Role */}
            <div>
              <h1 className="hero-display-name">
                Ramakrishnan <span className="text-gradient">M</span>
              </h1>
              
              <p className="hero-role-title">
                {personalInfo.role}
              </p>
            </div>

            {/* Tagline & Subhead Description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="hero-tagline-text">
                {personalInfo.tagline}
              </p>
              <p className="hero-subhead-text">
                {personalInfo.subhead}
              </p>
            </div>

            {/* Location & Social Channels */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                paddingTop: '6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                <MapPin size={16} color="var(--accent-green)" aria-hidden="true" />
                <span>Dindigul, India</span>
              </div>

              <span style={{ color: 'var(--border-medium)' }} aria-hidden="true">|</span>

              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hero-social-btn"
                  aria-label={`Email ${personalInfo.email}`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Circular Portrait */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div className="hero-circular-portrait-wrap">
              <img
                src={profilePic}
                alt="Portrait of Ramakrishnan M"
                className="hero-circular-portrait-img"
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



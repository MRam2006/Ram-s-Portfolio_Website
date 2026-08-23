import React from 'react';
import { aboutData, personalInfo } from '../data/portfolioData';
import profilePic from '../assets/profile.jpg';
import { GraduationCap, Brain, Code2, Cloud, Cpu, Sparkles, MapPin } from 'lucide-react';

const iconMap = {
  GraduationCap,
  Brain,
  Code2,
  Cloud,
  Cpu,
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" style={{ padding: '100px 0', position: 'relative', zIndex: 1, background: 'var(--bg-section)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 id="about-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '12px auto 0' }}>
            Bridging Generative AI research with production-grade full-stack development and cloud architecture.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'start' }} className="about-grid">
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img
                src={profilePic}
                alt="Ramakrishnan M profile photo"
                style={{
                  width: '85px',
                  height: '85px',
                  borderRadius: '20px',
                  objectFit: 'cover',
                  border: '2px solid var(--accent-green)',
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>{personalInfo.name}</h3>
                <p style={{ color: 'var(--accent-green)', fontWeight: '600', fontSize: '0.9rem' }}>{personalInfo.role}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  <MapPin size={14} aria-hidden="true" /> {personalInfo.location}
                </div>
              </div>
            </div>

            <hr style={{ border: 'none', height: '1px', background: 'var(--border-green)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
              {aboutData.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginTop: '10px' }}>
              <div style={{ background: 'var(--bg-card-secondary)', border: '1px solid var(--border-green)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-green)', fontWeight: '800', fontSize: '1.25rem' }}>2026</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '600' }}>Graduation Year</div>
              </div>
              <div style={{ background: 'var(--bg-card-secondary)', border: '1px solid var(--border-green)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-green)', fontWeight: '800', fontSize: '1.25rem' }}>2 Internships</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '600' }}>MERN & AWS Cloud</div>
              </div>
              <div style={{ background: 'var(--bg-card-secondary)', border: '1px solid var(--border-green)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-green)', fontWeight: '800', fontSize: '1.25rem' }}>6+ Projects</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '600' }}>GenAI, RAG, Web</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
            {aboutData.cards.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="glass-card-interactive"
                  style={{ padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'var(--accent-green-muted)',
                      border: '1px solid var(--border-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-green)',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {card.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {card.desc}
                    </p>
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

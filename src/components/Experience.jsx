import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Calendar, Building2, CheckCircle2, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 id="experience-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800' }}>
            Intern<span className="text-gradient">ships</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '12px auto 0' }}>
            Hands-on internships delivering web applications, API contracts, and AWS cloud infrastructure.
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '30px' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '7px',
              width: '3px',
              background: 'linear-gradient(180deg, var(--accent-green) 0%, var(--accent-green-dark) 100%)',
              borderRadius: '2px',
            }}
            aria-hidden="true"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {experienceData.map((exp) => (
              <article key={`${exp.role}-${exp.period}`} style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '-36px',
                    top: '24px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--accent-green)',
                    border: '3px solid var(--bg-main)',
                  }}
                  aria-hidden="true"
                />

                <div className="glass-card" style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <span style={{ background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', color: 'var(--accent-green)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {exp.type}
                      </span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-primary)', marginTop: '8px' }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-green)', fontWeight: '600', fontSize: '0.95rem', marginTop: '4px' }}>
                        <Building2 size={16} aria-hidden="true" /> {exp.company}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card-secondary)', padding: '6px 14px', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)', border: '1px solid var(--border-green)' }}>
                      <Calendar size={14} aria-hidden="true" /> {exp.period}
                    </div>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0', listStyle: 'none', padding: 0 }}>
                    {exp.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        <CheckCircle2 size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border-green)' }}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: 'var(--bg-card-secondary)',
                          border: '1px solid var(--border-green)',
                          color: 'var(--accent-green)',
                          padding: '4px 12px',
                          borderRadius: '8px',
                          fontSize: '0.775rem',
                          fontWeight: '600',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

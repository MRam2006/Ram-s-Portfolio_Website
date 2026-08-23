import React from 'react';
import { educationData } from '../data/portfolioData';
import { CheckCircle2, Calendar } from 'lucide-react';

export default function TrainingEducation() {
  return (
    <section id="education" aria-label="Education" style={{ padding: '100px 0', position: 'relative', zIndex: 1, background: 'var(--bg-section)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800' }}>
            Formal <span className="text-gradient">Education</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '12px auto 0' }}>
            Academic foundation in Computer Science and Engineering with core coursework in software engineering, algorithms, and computing systems.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <span style={{ background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', color: 'var(--accent-green)', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                Anna University Affiliated
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', marginTop: '8px' }}>
                {educationData.degree}
              </h3>
              <div style={{ color: 'var(--accent-green)', fontWeight: '600', fontSize: '0.9rem', marginTop: '4px' }}>
                {educationData.institution}
              </div>
            </div>

            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-card-secondary)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', border: '1px solid var(--border-green)' }}>
              <Calendar size={14} aria-hidden="true" /> {educationData.period}
            </span>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', listStyle: 'none', padding: 0 }}>
            {educationData.highlights.map((h) => (
              <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


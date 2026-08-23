import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onShowToast('Thank you! Your message has been sent successfully.', 'success');
    }, 1000);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    background: 'var(--bg-card-secondary)',
    border: '1px solid var(--border-green)',
    color: 'var(--text-primary)',
    outline: 'none',
    fontSize: '0.95rem',
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" style={{ padding: '100px 0', position: 'relative', zIndex: 1, background: 'var(--bg-section)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 id="contact-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800' }}>
            Let&apos;s Build Something <span className="text-gradient">Intelligent Together</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '650px', margin: '12px auto 0' }}>
            I&apos;m open to opportunities in Generative AI, full-stack development, software engineering, and cloud computing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }} aria-hidden="true">
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>Direct Email</div>
                <a href={`mailto:${personalInfo.email}`} style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', textDecoration: 'none' }}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }} aria-hidden="true">
                <LinkedinIcon size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>LinkedIn Profile</div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', textDecoration: 'none' }}>
                  linkedin.com/in/ramakrishnan-m-5211842a0
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }} aria-hidden="true">
                <GithubIcon size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>GitHub Repositories</div>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', textDecoration: 'none' }}>
                  github.com/MRam2006
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--accent-green-muted)', border: '1px solid var(--border-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }} aria-hidden="true">
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>Location</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px' }}>
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} noValidate>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '6px' }}>Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '6px' }}>Your Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. sarah@techcorp.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '6px' }}>Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Full-Stack Role / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '6px' }}>Message *</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  required
                  placeholder="Hello Ramakrishnan, I came across your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', marginTop: '8px', padding: '14px' }}
                aria-busy={loading}
              >
                {loading ? 'Sending Message...' : (
                  <>
                    <Send size={18} aria-hidden="true" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import { Award, X, ShieldCheck, ZoomIn } from 'lucide-react';

const CERTS = [
  {
    id: 'aws-restart',
    title: 'AWS re/Start Cloud Practitioner',
    issuer: 'TN Skill Corporation',
    subIssuer: 'Cultus Education and Technology Services Pvt. Ltd.',
    badge: 'Verified Certificate',
    image: '/cert-aws-restart.jpg',
    alt: 'AWS re/Start Cloud Practitioner – TN Skill Corporation Certificate of Recognition for Ramakrishnan M',
    aspectRatio: '16/9',
  },
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    subIssuer: 'Foundational Level',
    badge: 'Official AWS Credential',
    image: '/cert-aws-ccp.png',
    alt: 'AWS Certified Cloud Practitioner – Foundational Badge',
    aspectRatio: '1/1',
  },
  {
    id: 'ibm-genai',
    title: 'Generative AI in Action',
    issuer: 'IBM SkillsBuild',
    subIssuer: 'IBM SkillsBuild Program',
    badge: 'IBM Certified',
    image: '/cert-ibm-genai.png',
    alt: 'Generative AI in Action – IBM SkillsBuild Certificate',
    aspectRatio: '1/1',
  },
];

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate preview: ${cert.title}`}
      style={{ zIndex: 2000 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: 'var(--bg-surface-elevated)',
          border: '1px solid var(--accent-green)',
          borderRadius: '16px',
          boxShadow: '0 0 60px rgba(0,255,102,0.2), 0 30px 80px rgba(0,0,0,0.7)',
          padding: '16px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          animation: 'certModalIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <ShieldCheck size={14} color="var(--accent-green)" aria-hidden="true" />
              <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--accent-green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {cert.badge}
              </span>
            </div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {cert.title}
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              {cert.issuer} · {cert.subIssuer}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            style={{
              background: 'rgba(0,255,102,0.08)',
              border: '1px solid var(--accent-green)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-green)',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.2s ease',
            }}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Image */}
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
            borderRadius: '10px',
            border: '1px solid var(--border-medium)',
            background: '#0a0d10',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
          }}
        >
          <img
            src={cert.image}
            alt={cert.alt}
            style={{
              maxWidth: '100%',
              maxHeight: 'calc(90vh - 140px)',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  const handleCardClick = useCallback((cert) => {
    setActiveCert(cert);
  }, []);

  const handleClose = useCallback(() => {
    setActiveCert(null);
  }, []);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}
    >
      {/* Keyframes injected once */}
      <style>{`
        @keyframes certModalIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)   translateY(0); }
        }
        .cert-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-medium);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .cert-card:hover {
          border-color: var(--accent-green);
          transform: translateY(-6px);
          box-shadow: 0 8px 32px rgba(0,255,102,0.18), 0 0 0 1px rgba(0,255,102,0.12);
        }
        .cert-card:hover .cert-zoom-icon {
          opacity: 1;
        }
        .cert-card:hover .cert-img-overlay {
          opacity: 1;
        }
        .cert-zoom-icon {
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .cert-img-overlay {
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .cert-img-wrap img {
          transition: transform 0.4s ease;
        }
        .cert-card:hover .cert-img-wrap img {
          transform: scale(1.04);
        }
        @media (max-width: 768px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1099px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '12px' }}>
            <Award size={14} aria-hidden="true" /> Verified Credentials
          </div>
          <h2
            id="certifications-heading"
            className="section-title"
            style={{ textAlign: 'center' }}
          >
            Official <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '12px auto 0' }}>
            Industry certifications validating cloud architecture, AI engineering, and computing expertise.
          </p>
        </div>

        {/* Certificate grid — 3 columns on desktop */}
        <div
          className="cert-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {CERTS.map((cert) => (
            <article
              key={cert.id}
              className="cert-card"
              onClick={() => handleCardClick(cert)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick(cert); } }}
              tabIndex={0}
              role="button"
              aria-label={`View certificate: ${cert.title}`}
            >
              {/* Image area */}
              <div
                className="cert-img-wrap"
                style={{
                  position: 'relative',
                  background: '#0a0d10',
                  overflow: 'hidden',
                  aspectRatio: cert.aspectRatio,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div
                  className="cert-img-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(2px)',
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="cert-zoom-icon"
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'rgba(0,255,102,0.15)',
                      border: '2px solid var(--accent-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-green)',
                      boxShadow: '0 0 20px rgba(0,255,102,0.4)',
                    }}
                  >
                    <ZoomIn size={22} aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Info footer */}
              <div style={{ padding: '20px 20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <ShieldCheck size={13} color="var(--accent-green)" aria-hidden="true" />
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    color: 'var(--accent-green)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {cert.badge}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  marginBottom: '6px',
                }}>
                  {cert.title}
                </h3>

                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--accent-green)',
                  fontWeight: '600',
                  marginBottom: '2px',
                }}>
                  {cert.issuer}
                </p>

                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                }}>
                  {cert.subIssuer}
                </p>

                {/* Click hint */}
                <div style={{
                  marginTop: '14px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <ZoomIn size={12} color="var(--text-muted)" aria-hidden="true" />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Click to view full certificate
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeCert && (
        <CertModal cert={activeCert} onClose={handleClose} />
      )}
    </section>
  );
}

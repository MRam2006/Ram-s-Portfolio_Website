import React, { useState } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TrainingEducation from './components/TrainingEducation';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }} className="bg-grid-pattern">
      <NeuralBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TrainingEducation />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="animate-fade-in"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
            background: toast.type === 'error' ? 'rgba(239, 68, 68, 0.95)' : 'rgba(22, 101, 52, 0.95)',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            fontWeight: '600',
            fontSize: '0.9rem',
          }}
        >
          {toast.type === 'error' ? <AlertCircle size={20} aria-hidden="true" /> : <CheckCircle2 size={20} aria-hidden="true" />}
          {toast.message}
        </div>
      )}
    </div>
  );
}

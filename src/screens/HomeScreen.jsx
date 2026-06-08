import React from 'react';
import { Button, Badge, Input, Select, PaesSlider, ResultMeter, CareerCard, Stepper } from '../components/primitives.jsx';
import { USM_DATA } from '../data.js';

/* USM Admisión — Home / Hero (elite portal) */
export function StatStrip() {
  const stats = [
    ['70+', 'carreras de pregrado'],
    ['4', 'campus y sedes'],
    ['7 años', 'de acreditación'],
    ['1931', 'fundada en Valparaíso'],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.14)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.14)' }}>
      {stats.map(([n, l]) => (
        <div key={l} style={{ background: 'rgba(0,19,47,0.35)', padding: '18px 20px', backdropFilter: 'blur(2px)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 800, color: 'var(--usm-gold-400)', letterSpacing: '-0.02em' }}>{n}</div>
          <div style={{ fontSize: 'var(--t-sm)', color: 'var(--usm-navy-100)', marginTop: '2px' }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

export function QuickAccess({ onNavigate }) {
  const items = [
    { id: 'carreras', title: 'Explorar carreras', desc: 'Busca y compara 70+ programas', accent: false },
    { id: 'simulador', title: 'Simular tu puntaje', desc: 'Estima si alcanzas el corte', accent: true },
    { id: 'becas', title: 'Becas y beneficios', desc: 'Descubre cómo financiar tu carrera', accent: false },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
      {items.map((it) => (
        <button key={it.id} onClick={() => onNavigate(it.id)}
          style={{ textAlign: 'left', cursor: 'pointer', background: it.accent ? 'var(--usm-gold-50)' : 'var(--surface-card)', border: it.accent ? '1.5px solid var(--usm-gold-300)' : '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '22px', boxShadow: 'var(--shadow-sm)', transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h4)', fontWeight: 700, color: 'var(--usm-navy-900)', margin: 0 }}>{it.title}</h3>
            <span style={{ fontSize: '20px', color: it.accent ? 'var(--usm-gold-600)' : 'var(--usm-navy-500)' }}>→</span>
          </div>
          <p style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)', marginTop: '8px' }}>{it.desc}</p>
        </button>
      ))}
    </div>
  );
}

export function HomeScreen({ onNavigate }) {
  const [q, setQ] = React.useState('');
  const featured = USM_DATA.CAREERS.filter((c) => c.featured);
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--usm-navy-900)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://usm.cl/wp-content/uploads/2024/09/casa-central-valparaiso-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, var(--usm-navy-900) 18%, rgba(0,27,78,0.82) 55%, rgba(0,48,135,0.55) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6.5rem) var(--gutter) clamp(3rem, 5vw, 4.5rem)' }}>
          <div style={{ maxWidth: '760px' }}>
            <span className="usm-overline" style={{ color: 'var(--usm-gold-400)' }}>Admisión 2026 · Postulaciones abiertas</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 800, color: '#fff', lineHeight: 1.04, letterSpacing: '-0.025em', margin: '16px 0 0' }}>
              Tu futuro en ingeniería, ciencia y tecnología empieza aquí.
            </h1>
            <p style={{ fontSize: 'var(--t-lead)', color: 'var(--usm-navy-100)', lineHeight: 1.55, margin: '20px 0 0', maxWidth: '600px' }}>
              Explora carreras, simula tu puntaje PAES y postula a una de las universidades de ingeniería más prestigiosas de Chile.
            </p>

            {/* Search */}
            

            <div style={{ marginTop: '40px', maxWidth: '680px' }}><StatStrip /></div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) var(--gutter) 0' }}>
        <QuickAccess onNavigate={onNavigate} />
      </section>

      {/* FEATURED CAREERS */}
      <section style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) var(--gutter) clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          
          
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '18px' }}>
          {featured.map((c) => <CareerCard key={c.id} {...c} onClick={() => onNavigate('simulador')} />)}
        </div>
      </section>
    </div>
  );
}


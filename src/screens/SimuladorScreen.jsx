import React from 'react';
import { Button, Badge, Input, Select, PaesSlider, ResultMeter, CareerCard, Stepper } from '../components/primitives.jsx';
import { USM_DATA } from '../data.js';

/* USM Admisión — Simulador de puntaje PAES (feature estrella) */
const WEIGHTS = [
  { key: 'nem', label: 'NEM', w: 0.10, hint: 'Notas de enseñanza media' },
  { key: 'rank', label: 'Ranking', w: 0.10, hint: 'Ranking de notas' },
  { key: 'lectora', label: 'Competencia Lectora', w: 0.15, hint: 'PAES obligatoria' },
  { key: 'm1', label: 'Competencia Matemática M1', w: 0.20, hint: 'PAES obligatoria' },
  { key: 'm2', label: 'Competencia Matemática M2', w: 0.30, hint: 'PAES electiva' },
  { key: 'ciencias', label: 'Ciencias / Historia', w: 0.15, hint: 'PAES electiva' },
];

export function SimuladorScreen({ onNavigate }) {
  const { CAREERS } = USM_DATA;
  const [careerId, setCareerId] = React.useState(1);
  const [scores, setScores] = React.useState({ nem: 680, rank: 700, lectora: 690, m1: 720, m2: 710, ciencias: 660 });
  const career = CAREERS.find((c) => c.id === careerId);
  const ponderado = Math.round(WEIGHTS.reduce((sum, w) => sum + scores[w.key] * w.w, 0));
  const set = (k) => (v) => setScores((s) => ({ ...s, [k]: v }));

  return (
    <div style={{ background: 'var(--usm-navy-900)' }}>
      {/* header band */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(1200px 400px at 20% -10%, rgba(0,48,135,0.6), transparent 60%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) var(--gutter) clamp(1.5rem, 3vw, 2.5rem)' }}>
          <span className="usm-overline" style={{ color: 'var(--usm-gold-400)' }}>Simulador de postulación</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h1)', fontWeight: 800, color: '#fff', margin: '8px 0 0', letterSpacing: '-0.02em' }}>Simula tu puntaje PAES</h1>
          <p style={{ fontSize: 'var(--t-lead)', color: 'var(--usm-navy-100)', margin: '10px 0 0', maxWidth: '600px' }}>Ajusta tus puntajes y descubre al instante si alcanzas el corte de la carrera que sueñas.</p>
        </div>
      </div>

      {/* body */}
      <div style={{ background: 'var(--surface-page)', borderTopLeftRadius: '28px', borderTopRightRadius: '28px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) var(--gutter) 4rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)', gap: '28px', alignItems: 'start' }} className="usm-sim-grid">
          {/* sliders */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 'clamp(20px, 3vw, 30px)', boxShadow: 'var(--shadow-md)' }}>
            <Select label="¿A qué carrera quieres postular?" value={careerId} onChange={(e) => setCareerId(Number(e.target.value))} style={{ marginBottom: '26px' }}>
              {CAREERS.map((c) => <option key={c.id} value={c.id}>{c.name} · corte {c.cutoff}</option>)}
            </Select>
            <div style={{ display: 'grid', gap: '22px' }}>
              {WEIGHTS.map((w) => (
                <PaesSlider key={w.key} label={`${w.label}`} value={scores[w.key]} onChange={set(w.key)} hint={`Pondera ${Math.round(w.w * 100)}%`} />
              ))}
            </div>
          </div>

          {/* result (sticky) */}
          <div style={{ position: 'sticky', top: 'calc(var(--navbar-h) + 16px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '6px', boxShadow: 'var(--shadow-lg)' }}>
              <ResultMeter score={ponderado} cutoff={career.cutoff} careerName={career.name} style={{ border: 'none', borderRadius: '22px' }} />
            </div>
            <div style={{ background: 'var(--usm-navy-50)', border: '1px solid var(--border-brand)', borderRadius: 'var(--radius-lg)', padding: '18px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)' }}>Tu puntaje ponderado</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--usm-navy-800)', fontVariantNumeric: 'tabular-nums' }}>{ponderado}</span>
              </div>
              <div style={{ height: '1px', background: 'var(--border-brand)', margin: '12px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)' }}>Corte 2025 · {career.name.split(' ').slice(0, 3).join(' ')}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--usm-navy-600)', fontVariantNumeric: 'tabular-nums' }}>{career.cutoff}</span>
              </div>
            </div>
            <Button variant="accent" size="lg" fullWidth onClick={() => onNavigate('postular')}>Postular a esta carrera</Button>
            <p style={{ fontSize: 'var(--t-xs)', color: 'var(--text-subtle)', textAlign: 'center', margin: 0 }}>Estimación referencial. El puntaje de corte puede variar cada año según el proceso DEMRE.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


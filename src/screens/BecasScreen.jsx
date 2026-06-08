import React from 'react';
import { Button, Badge, Input, Select, PaesSlider, ResultMeter, CareerCard, Stepper } from '../components/primitives.jsx';
import { USM_DATA } from '../data.js';

/* USM Admisión — Becas y beneficios */
export function BecaCard({ name, tone, cover, req, tag }) {
  const accent = { gold: 'var(--usm-gold-500)', brand: 'var(--usm-navy-600)', ok: 'var(--ok-solid)' }[tone] || 'var(--usm-navy-600)';
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '5px', background: accent }} />
      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h4)', fontWeight: 700, color: 'var(--usm-navy-900)', margin: 0, lineHeight: 1.2 }}>{name}</h3>
          <Badge tone={tone}>{tag}</Badge>
        </div>
        <div>
          <div style={{ fontSize: 'var(--t-overline)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Cobertura</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: accent, marginTop: '2px' }}>{cover}</div>
        </div>
        <div style={{ fontSize: 'var(--t-sm)', color: 'var(--text-body)', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginTop: 'auto' }}>
          <span style={{ color: 'var(--text-muted)' }}>Requisito: </span>{req}
        </div>
      </div>
    </div>
  );
}

export function BecasScreen({ onNavigate }) {
  const { BECAS } = USM_DATA;
  return (
    <div>
      <div style={{ background: 'var(--usm-navy-50)', borderBottom: '1px solid var(--border-brand)' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) var(--gutter)' }}>
          <span className="usm-overline">Financia tus estudios</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h1)', fontWeight: 700, color: 'var(--usm-navy-900)', margin: '8px 0 0', letterSpacing: '-0.02em' }}>Becas y beneficios</h1>
          <p style={{ fontSize: 'var(--t-lead)', color: 'var(--text-muted)', margin: '10px 0 0', maxWidth: '640px' }}>En la USM, el talento no tiene barreras. Conoce las becas internas y estatales que pueden financiar total o parcialmente tu carrera.</p>
          <div style={{ display: 'flex', gap: '28px', marginTop: '26px', flexWrap: 'wrap' }}>
            {[['8 de cada 10', 'estudiantes con algún beneficio'], ['100%', 'arancel cubierto con gratuidad'], ['+15', 'becas disponibles']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--usm-navy-800)', letterSpacing: '-0.02em' }}>{n}</div>
                <div style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) var(--gutter) 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
          {BECAS.map((b) => <BecaCard key={b.id} {...b} />)}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '32px', background: 'var(--usm-navy-900)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(28px, 5vw, 48px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(800px 300px at 90% 0%, rgba(212,160,23,0.18), transparent 60%)' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '520px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>¿No sabes a qué becas puedes acceder?</h2>
              <p style={{ fontSize: 'var(--t-base)', color: 'var(--usm-navy-100)', marginTop: '10px' }}>Simula tu puntaje y postula — durante el proceso te mostraremos los beneficios para los que calificas.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" onClick={() => onNavigate('simulador')}>Simular puntaje</Button>
              <Button variant="inverse" size="lg" onClick={() => onNavigate('postular')}>Postular</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


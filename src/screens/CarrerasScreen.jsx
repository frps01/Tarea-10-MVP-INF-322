import React from 'react';
import { Button, Badge, Input, Select, PaesSlider, ResultMeter, CareerCard, Stepper } from '../components/primitives.jsx';
import { USM_DATA } from '../data.js';

/* USM Admisión — Explorar carreras (search + filters) */
export function FilterChip({ label, active, onClick }) {
  return (
    <button onClick={onClick}
      style={{ cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--t-sm)', fontWeight: 600, padding: '8px 16px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', border: active ? '1.5px solid var(--usm-navy-800)' : '1.5px solid var(--border-default)', background: active ? 'var(--usm-navy-800)' : 'var(--surface-card)', color: active ? '#fff' : 'var(--text-body)', transition: 'all var(--dur-fast)' }}>
      {label}
    </button>
  );
}

export function CarrerasScreen({ onNavigate }) {
  const { CAREERS, AREAS, CAMPUSES } = USM_DATA;
  const [q, setQ] = React.useState('');
  const [area, setArea] = React.useState('Todas');
  const [campus, setCampus] = React.useState('Todos');
  const [sort, setSort] = React.useState('corte-desc');

  let list = CAREERS.filter((c) =>
    (area === 'Todas' || c.area === area) &&
    (campus === 'Todos' || c.campus === campus) &&
    (q === '' || c.name.toLowerCase().includes(q.toLowerCase()) || c.faculty.toLowerCase().includes(q.toLowerCase()))
  );
  list = [...list].sort((a, b) => sort === 'corte-desc' ? b.cutoff - a.cutoff : sort === 'corte-asc' ? a.cutoff - b.cutoff : a.name.localeCompare(b.name));

  return (
    <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) var(--gutter) 4rem' }}>
      <span className="usm-overline">Pregrado · Admisión 2026</span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h1)', fontWeight: 700, color: 'var(--usm-navy-900)', margin: '6px 0 0', letterSpacing: '-0.02em' }}>Explora nuestras carreras</h1>
      <p style={{ fontSize: 'var(--t-lead)', color: 'var(--text-muted)', margin: '10px 0 0', maxWidth: '620px' }}>Compara programas, campus y puntajes de corte para encontrar la carrera ideal para ti.</p>

      {/* search + sort */}
      <div style={{ display: 'flex', gap: '12px', margin: '28px 0 18px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px', display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--surface-card)', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '0 16px' }}>
          <span style={{ color: 'var(--text-subtle)', fontSize: '18px' }}>⌕</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nombre o departamento…"
            style={{ flex: 1, border: 'none', outline: 'none', fontFamily: 'var(--font-body)', fontSize: 'var(--t-base)', color: 'var(--text-strong)', background: 'transparent', padding: '14px 0', minWidth: 0 }} />
        </div>
        <Select value={sort} onChange={(e) => setSort(e.target.value)} style={{ minWidth: '210px' }}>
          <option value="corte-desc">Mayor puntaje de corte</option>
          <option value="corte-asc">Menor puntaje de corte</option>
          <option value="nombre">Nombre (A–Z)</option>
        </Select>
      </div>

      {/* area chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
        {AREAS.map((a) => <FilterChip key={a} label={a} active={area === a} onClick={() => setArea(a)} />)}
      </div>
      {/* campus chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: 'var(--t-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginRight: '4px' }}>Campus</span>
        {CAMPUSES.map((c) => <FilterChip key={c} label={c} active={campus === c} onClick={() => setCampus(c)} />)}
      </div>

      {/* results */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '26px 0 16px' }}>
        <span style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-strong)' }}>{list.length}</strong> carrera{list.length !== 1 ? 's' : ''} encontrada{list.length !== 1 ? 's' : ''}</span>
      </div>

      {list.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-default)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', color: 'var(--usm-navy-900)' }}>Sin resultados</div>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Prueba con otros filtros o términos de búsqueda.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '18px' }}>
          {list.map((c) => <CareerCard key={c.id} {...c} onClick={() => onNavigate('simulador')} />)}
        </div>
      )}
    </div>
  );
}


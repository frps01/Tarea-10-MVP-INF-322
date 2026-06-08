import React from 'react';
import { Button } from './components/primitives.jsx';

/* USM Admisión — sticky top navigation */
export function Logo({ inverse = false, compact = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
      <img src="/mark-usm.png" alt="USM" style={{ width: '38px', height: '38px', flexShrink: 0 }} />
      {!compact && (
        <div style={{ lineHeight: 1.05 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: inverse ? 'var(--usm-gold-400)' : 'var(--brand-accent)' }}>Universidad Técnica</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '15px', letterSpacing: '-0.01em', color: inverse ? '#fff' : 'var(--usm-navy-900)', marginTop: '2px' }}>Federico Santa María</div>
        </div>
      )}
    </div>
  );
}

export function Navbar({ route, onNavigate, onPostular }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: 'carreras', label: 'Carreras' },
    { id: 'simulador', label: 'Simulador' },
    { id: 'becas', label: 'Becas y beneficios' },
  ];
  const NavLink = ({ id, label }) => {
    const active = route === id;
    return (
      <button onClick={() => { onNavigate(id); setOpen(false); }}
        style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--t-base)', fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-medium)', color: active ? 'var(--usm-navy-900)' : 'var(--text-body)', padding: '8px 2px', transition: 'color var(--dur-fast)' }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--usm-navy-900)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = active ? 'var(--usm-navy-900)' : 'var(--text-body)'; }}>
        {label}
        <span style={{ position: 'absolute', left: 0, right: 0, bottom: '-2px', height: '3px', borderRadius: '3px', background: 'var(--brand-accent)', transform: active ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform var(--dur-base) var(--ease-out)' }} />
      </button>
    );
  };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)', height: 'var(--navbar-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}><Logo /></div>

        <nav className="usm-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {links.map((l) => <NavLink key={l.id} {...l} />)}
        </nav>

        

        <button className="usm-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menú"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '8px' }}>
          {[0, 1, 2].map((i) => <span key={i} style={{ width: '24px', height: '2.5px', borderRadius: '2px', background: 'var(--usm-navy-900)' }} />)}
        </button>
      </div>

      {open && (
        <div className="usm-mobile-menu" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--white)', padding: 'var(--space-4) var(--gutter) var(--space-6)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => { onNavigate(l.id); setOpen(false); }}
              style={{ textAlign: 'left', background: route === l.id ? 'var(--usm-navy-50)' : 'transparent', border: 'none', borderRadius: 'var(--radius-md)', padding: '14px 16px', fontFamily: 'var(--font-body)', fontSize: 'var(--t-lead)', fontWeight: 600, color: 'var(--usm-navy-900)', cursor: 'pointer' }}>
              {l.label}
            </button>
          ))}
          
        </div>
      )}
    </header>
  );
}


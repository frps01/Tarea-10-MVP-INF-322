import React from 'react';
import { Navbar, Logo } from './Navbar.jsx';
import { HomeScreen } from './screens/HomeScreen.jsx';
import { CarrerasScreen } from './screens/CarrerasScreen.jsx';
import { SimuladorScreen } from './screens/SimuladorScreen.jsx';

import { BecasScreen } from './screens/BecasScreen.jsx';

/* USM Admisión — app shell + routing */
export function Footer({ onNavigate }) {
  const cols = [
    ['Admisión', ['Proximamente']],
    ['La universidad', ['Proximamente']],
    ['Contacto', ['Proximamente']],
  ];
  return (
    <footer style={{ background: 'var(--usm-navy-900)', color: 'var(--usm-navy-100)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) var(--gutter) 2rem', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: '32px' }} className="usm-footer-grid">
        <div>
          <Logo inverse />
          <p style={{ fontSize: 'var(--t-sm)', color: 'var(--usm-navy-200)', marginTop: '16px', maxWidth: '260px', lineHeight: 1.6 }}></p>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--usm-gold-400)', marginBottom: '14px' }}>{title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {items.map((it) => <span key={it} style={{ fontSize: 'var(--t-sm)', color: 'var(--usm-navy-100)', cursor: 'pointer' }}>{it}</span>)}
            </div>
          </div>
        ))}
      </div>
      
    </footer>
  );
}

export function App() {
  const [route, setRoute] = React.useState('home');
  const navigate = (r) => { setRoute(r); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' }); };
  const screens = {
    home: HomeScreen, carreras: CarrerasScreen, simulador: SimuladorScreen,
    becas: BecasScreen,
  };
  const Screen = screens[route] || HomeScreen;
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
      <Navbar route={route} onNavigate={navigate} onPostular={() => navigate('postular')} />
      <main style={{ flex: 1 }}><Screen onNavigate={navigate} /></main>
      <Footer onNavigate={navigate} />
    </div>
  );
}


export default App;

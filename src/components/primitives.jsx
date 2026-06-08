import React from 'react';


export function Button({ children, variant = 'primary', size = 'md', fullWidth = false, disabled = false, iconLeft = null, iconRight = null, style = {}, ...rest }) {
  const sizes = {
    sm: { padding: '8px 14px', font: 'var(--t-sm)', radius: 'var(--radius-sm)', gap: '6px' },
    md: { padding: '12px 22px', font: 'var(--t-base)', radius: 'var(--radius-md)', gap: '8px' },
    lg: { padding: '16px 30px', font: 'var(--t-lead)', radius: 'var(--radius-md)', gap: '10px' },
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: { background: 'var(--brand-primary)', color: 'var(--text-on-brand)', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
    accent: { background: 'var(--brand-accent)', color: 'var(--text-on-accent)', border: '1px solid transparent', boxShadow: 'var(--shadow-gold)' },
    secondary: { background: 'var(--surface-card)', color: 'var(--brand-primary)', border: '1.5px solid var(--border-default)', boxShadow: 'none' },
    ghost: { background: 'transparent', color: 'var(--brand-primary)', border: '1px solid transparent', boxShadow: 'none' },
    inverse: { background: 'var(--white)', color: 'var(--usm-navy-900)', border: '1px solid transparent', boxShadow: 'var(--shadow-md)' },
  };
  const v = variants[variant] || variants.primary;
  return (
    <button disabled={disabled}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap, width: fullWidth ? '100%' : 'auto', padding: s.padding, fontFamily: 'var(--font-body)', fontSize: s.font, fontWeight: 'var(--fw-semibold)', lineHeight: 1, borderRadius: s.radius, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)', ...v, ...style }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.06)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}

export function Badge({ children, tone = 'neutral', solid = false, dot = false, style = {} }) {
  const tones = {
    neutral: { fg: 'var(--slate-700)', bg: 'var(--slate-100)', solidBg: 'var(--slate-600)' },
    brand: { fg: 'var(--usm-navy-700)', bg: 'var(--usm-navy-50)', solidBg: 'var(--usm-navy-700)' },
    gold: { fg: 'var(--usm-gold-700)', bg: 'var(--usm-gold-100)', solidBg: 'var(--usm-gold-500)' },
    ok: { fg: 'var(--ok-fg)', bg: 'var(--ok-bg)', solidBg: 'var(--ok-solid)' },
    warn: { fg: 'var(--warn-fg)', bg: 'var(--warn-bg)', solidBg: 'var(--warn-solid)' },
    bad: { fg: 'var(--bad-fg)', bg: 'var(--bad-bg)', solidBg: 'var(--bad-solid)' },
  };
  const t = tones[tone] || tones.neutral;
  const solidText = tone === 'gold' ? 'var(--usm-navy-900)' : 'var(--white)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', fontFamily: 'var(--font-body)', fontSize: 'var(--t-xs)', fontWeight: 'var(--fw-semibold)', lineHeight: 1.4, borderRadius: 'var(--radius-pill)', color: solid ? solidText : t.fg, background: solid ? t.solidBg : t.bg, whiteSpace: 'nowrap', ...style }}>
      {dot && <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: solid ? solidText : t.solidBg, flexShrink: 0 }} />}
      {children}
    </span>
  );
}

export function Input({ label, hint, error, required = false, prefix = null, style = {}, ...rest }) {
  const borderColor = error ? 'var(--bad-solid)' : 'var(--border-default)';
  return (
    <div style={{ fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && <label style={{ fontSize: 'var(--t-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{label}{required && <span style={{ color: 'var(--bad-solid)', marginLeft: '3px' }}>*</span>}</label>}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--surface-card)', border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)', padding: '0 14px', transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)' }}
        onFocusCapture={(e) => { if (!error) { e.currentTarget.style.borderColor = 'var(--ring-focus)'; e.currentTarget.style.boxShadow = 'var(--focus-ring)'; } }}
        onBlurCapture={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.boxShadow = 'none'; }}>
        {prefix && <span style={{ color: 'var(--text-muted)', fontSize: 'var(--t-base)', flexShrink: 0 }}>{prefix}</span>}
        <input style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-body)', fontSize: 'var(--t-base)', color: 'var(--text-strong)', padding: '13px 0', minWidth: 0 }} {...rest} />
      </div>
      {error ? <span style={{ fontSize: 'var(--t-xs)', color: 'var(--bad-fg)' }}>{error}</span> : hint && <span style={{ fontSize: 'var(--t-xs)', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}

export function Select({ label, hint, required = false, children, style = {}, ...rest }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && <label style={{ fontSize: 'var(--t-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{label}{required && <span style={{ color: 'var(--bad-solid)', marginLeft: '3px' }}>*</span>}</label>}
      <div style={{ position: 'relative' }}>
        <select style={{ width: '100%', appearance: 'none', WebkitAppearance: 'none', background: 'var(--surface-card)', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '13px 40px 13px 14px', fontFamily: 'var(--font-body)', fontSize: 'var(--t-base)', color: 'var(--text-strong)', cursor: 'pointer', outline: 'none' }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--ring-focus)'; e.currentTarget.style.boxShadow = 'var(--focus-ring)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.boxShadow = 'none'; }} {...rest}>
          {children}
        </select>
        <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '12px' }}>▾</span>
      </div>
      {hint && <span style={{ fontSize: 'var(--t-xs)', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}

export function PaesSlider({ label, value, onChange, min = 100, max = 1000, step = 5, hint = null, style = {} }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ fontFamily: 'var(--font-body)', ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
        <span style={{ fontSize: 'var(--t-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 'var(--fw-bold)', color: 'var(--usm-navy-800)', fontVariantNumeric: 'tabular-nums' }}>{value}</span>
      </div>
      <div style={{ position: 'relative', height: '22px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: '8px', borderRadius: '999px', background: 'var(--slate-200)' }} />
        <div style={{ position: 'absolute', left: 0, width: `${pct}%`, height: '8px', borderRadius: '999px', background: 'linear-gradient(90deg, var(--usm-navy-700), var(--usm-navy-500))' }} />
        <div style={{ position: 'absolute', left: `${pct}%`, transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '999px', background: 'var(--brand-accent)', border: '3px solid var(--white)', boxShadow: 'var(--shadow-md)', pointerEvents: 'none' }} />
        <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} aria-label={label}
          style={{ position: 'absolute', left: 0, right: 0, width: '100%', height: '22px', margin: 0, opacity: 0, cursor: 'pointer' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
        <span style={{ fontSize: 'var(--t-xs)', color: 'var(--text-subtle)' }}>{min}</span>
        {hint && <span style={{ fontSize: 'var(--t-xs)', color: 'var(--text-muted)' }}>{hint}</span>}
        <span style={{ fontSize: 'var(--t-xs)', color: 'var(--text-subtle)' }}>{max}</span>
      </div>
    </div>
  );
}

export function ResultMeter({ score, cutoff, min = 100, max = 1000, careerName = null, style = {} }) {
  const margin = score - cutoff;
  let label, message, solid, bg, fg;
  if (margin >= 30) { label = 'Seguro'; message = `Superas el corte por ${margin} puntos.`; solid = 'var(--ok-solid)'; bg = 'var(--ok-bg)'; fg = 'var(--ok-fg)'; }
  else if (margin >= -20) { label = 'En el límite'; message = margin >= 0 ? `Estás ${margin} puntos sobre el corte — muy ajustado.` : `Te faltan ${Math.abs(margin)} puntos para el corte.`; solid = 'var(--warn-solid)'; bg = 'var(--warn-bg)'; fg = 'var(--warn-fg)'; }
  else { label = 'Bajo el corte'; message = `Te faltan ${Math.abs(margin)} puntos para esta carrera.`; solid = 'var(--bad-solid)'; bg = 'var(--bad-bg)'; fg = 'var(--bad-fg)'; }
  const scorePct = Math.max(0, Math.min(100, ((score - min) / (max - min)) * 100));
  const cutPct = Math.max(0, Math.min(100, ((cutoff - min) / (max - min)) * 100));
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: bg, border: `1px solid ${solid}`, borderRadius: 'var(--radius-xl)', padding: '22px 24px', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '4px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 'var(--fw-bold)', color: fg }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '999px', background: solid }} />{label}
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 'var(--fw-extra)', color: 'var(--usm-navy-900)', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{score}</span>
      </div>
      {careerName && <div style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)', marginBottom: '14px' }}>{careerName} · corte {cutoff}</div>}
      <div style={{ position: 'relative', height: '14px', marginTop: '8px', marginBottom: '8px' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: 'linear-gradient(90deg, var(--feedback-red-500) 0%, var(--feedback-amber-500) 50%, var(--feedback-green-500) 100%)', opacity: 0.85 }} />
        <div style={{ position: 'absolute', left: `${cutPct}%`, top: '-5px', bottom: '-5px', width: '3px', background: 'var(--usm-navy-900)', borderRadius: '2px', transform: 'translateX(-50%)' }} />
        <div style={{ position: 'absolute', left: `${scorePct}%`, top: '50%', width: '20px', height: '20px', borderRadius: '999px', background: 'var(--white)', border: `4px solid ${solid}`, boxShadow: 'var(--shadow-md)', transform: 'translate(-50%, -50%)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--t-xs)', color: 'var(--text-muted)', marginBottom: '12px' }}>
        <span>{min}</span><span style={{ color: 'var(--usm-navy-900)', fontWeight: 'var(--fw-semibold)' }}>corte {cutoff}</span><span>{max}</span>
      </div>
      <p style={{ fontSize: 'var(--t-base)', color: 'var(--text-body)', margin: 0, fontWeight: 'var(--fw-medium)' }}>{message}</p>
    </div>
  );
}

export function CareerCard({ name, faculty, campus, duration, cutoff, vacancies, accredited = false, featured = false, onClick, style = {} }) {
  return (
    <div onClick={onClick} style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-card)', border: featured ? '1.5px solid var(--usm-gold-300)' : '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '20px', cursor: onClick ? 'pointer' : 'default', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '14px', transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)', ...style }}
      onMouseEnter={(e) => { if (onClick) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
      <div>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          {featured && <Badge tone="gold" solid>Destacada</Badge>}
          {accredited && <Badge tone="brand">Acreditada</Badge>}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h4)', fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)', margin: 0, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{name}</h3>
        <div style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)', marginTop: '4px' }}>{faculty}</div>
      </div>
      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        {[['Campus', campus], ['Duración', duration], ['Cupos', vacancies]].filter(([, v]) => v != null).map(([k, v]) => (
          <div key={k}>
            <div style={{ fontSize: 'var(--t-overline)', fontWeight: 'var(--fw-bold)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{k}</div>
            <div style={{ fontSize: 'var(--t-sm)', color: 'var(--text-body)', fontWeight: 'var(--fw-medium)', marginTop: '2px' }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
        <span style={{ fontSize: 'var(--t-sm)', color: 'var(--text-muted)' }}> corte 2025</span>
        <span style={{ fontFamily: 'var(--t-overline)', fontSize: '1.5rem', fontWeight: 'var(--fw-extra)', color: 'var(--usm-navy-800)', letterSpacing: '-0.02em',  }}>{cutoff}</span>
      </div>
    </div>
  );
}

export function Stepper({ steps, current = 0, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', fontFamily: 'var(--font-body)', ...style }}>
      {steps.map((label, i) => {
        const done = i < current, active = i === current, isLast = i === steps.length - 1;
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0, width: '100px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '999px', background: done ? 'var(--usm-navy-800)' : active ? 'var(--surface-card)' : 'var(--slate-100)', border: `2.5px solid ${done ? 'var(--usm-navy-800)' : active ? 'var(--brand-accent)' : 'var(--border-default)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: '1rem', color: done ? 'var(--white)' : active ? 'var(--usm-navy-800)' : 'var(--text-subtle)', boxShadow: active ? '0 0 0 4px var(--usm-gold-100)' : 'none', transition: 'all var(--dur-base) var(--ease-out)' }}>{done ? '✓' : i + 1}</div>
              <span style={{ fontSize: 'var(--t-xs)', fontWeight: active || done ? 'var(--fw-semibold)' : 'var(--fw-regular)', color: active ? 'var(--text-strong)' : 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3 }}>{label}</span>
            </div>
            {!isLast && <div style={{ flex: 1, height: '2.5px', borderRadius: '2px', marginTop: '19px', background: done ? 'var(--usm-navy-800)' : 'var(--border-default)', transition: 'background var(--dur-base)' }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}


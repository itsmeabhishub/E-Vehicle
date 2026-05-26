"use client";
import { Zap, Target, Heart, Award, Users, MapPin } from 'lucide-react';

const milestones = [
  { year: '2003', title: 'Foundation', desc: 'Vehicle engineering journey begins with petrol 2-wheelers' },
  { year: '2010', title: 'Expansion', desc: 'Expanded to commercial fleet solutions across North India' },
  { year: '2018', title: 'R&D Pivot', desc: 'Started electric vehicle research and development program' },
  { year: '2024', title: 'Regal EV Born', desc: 'Official launch of Regal EV brand from Bahadurgarh, Haryana' },
  { year: '2025', title: 'Scale Up', desc: '500+ dealers, 14+ models, 10,000+ satisfied riders' },
  { year: '2026', title: 'Future Ahead', desc: 'Launching next-gen models with AI-powered riding technology' },
];

const team = [
  { role: 'Founder & CEO', name: 'Regal EV Team', expertise: '20+ Years Engineering' },
  { role: 'Head of R&D', name: 'Technical Division', expertise: 'EV Technology Expert' },
  { role: 'Operations Head', name: 'Supply Chain Team', expertise: 'Manufacturing & Logistics' },
  { role: 'Customer Success', name: 'Support Division', expertise: '24/7 Rider Support' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 72, background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 5% 100px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(var(--primary-rgb),0.06)',
      }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(ellipse at right, rgba(var(--primary-rgb),0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: 'var(--primary)', letterSpacing: 4, marginBottom: 16 }}>
              ABOUT REGAL EV
            </div>
            <h1 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 24 }}>
              DRIVEN BY PASSION,<br />
              <span style={{ background: 'linear-gradient(90deg, var(--primary), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                POWERED BY PURPOSE
              </span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8 }}>
              Located in Bahadurgarh, Regal EV is a new-age electric mobility brand built on over 20 years of industry experience in vehicle engineering and manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: 'var(--primary)', letterSpacing: 4, marginBottom: 16 }}>OUR STORY</div>
            <h2 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 24 }}>
              BUILT ON 20+ YEARS OF EXCELLENCE
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.9, marginBottom: 20 }}>
              While the brand is new, our foundation is strong — backed by decades of expertise, technical know-how, and deep understanding of Indian road conditions.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.9, marginBottom: 20 }}>
              Regal EV electric scooters are designed using advanced electric technology to deliver long range, smooth performance, and reliable durability. Every model is thoughtfully engineered to meet the real needs of daily commuters, businesses, and fleet users.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.9 }}>
              With a focus on sustainability, low running costs, and customer satisfaction, Regal EV is committed to driving India's transition towards clean, smart, and dependable electric mobility.
            </p>
          </div>

          <div style={{
            background: 'rgba(var(--surface-rgb),0.88)',
            border: '1px solid rgba(var(--primary-rgb),0.12)',
            borderRadius: 20,
            padding: 40,
          }}>
            {[
              { icon: Target, title: 'Our Vision', text: 'To redefine everyday mobility by making electric transportation reliable, affordable, and accessible for everyone in India.' },
              { icon: Heart, title: 'Our Promise', text: 'Long-term partnerships built on trust, transparency, and consistent support for both dealers and customers.' },
              { icon: Award, title: 'Our Commitment', text: 'Quality products, reliable service, and continuous innovation to help our dealers grow and customers ride with confidence.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} style={{ display: 'flex', gap: 20, marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid rgba(var(--surface-rgb),0.06)' }}>
                <div style={{
                  width: 48, height: 48,
                  background: 'rgba(var(--primary-rgb),0.1)',
                  border: '1px solid rgba(var(--primary-rgb),0.2)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} color="var(--primary)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Orbitron', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.7 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 5%', background: 'rgba(var(--primary-rgb),0.02)', borderTop: '1px solid rgba(var(--primary-rgb),0.06)', borderBottom: '1px solid rgba(var(--primary-rgb),0.06)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontFamily: 'Orbitron', fontSize: 11, color: 'var(--primary)', letterSpacing: 4, marginBottom: 16 }}>JOURNEY</div>
            <h2 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, color: 'var(--text-primary)' }}>OUR MILESTONES</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, transparent, rgba(var(--primary-rgb),0.4), transparent)',
              transform: 'translateX(-50%)',
            }} />
            {milestones.map((m, i) => (
              <div key={m.year} style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: 40,
                position: 'relative',
              }}>
                <div style={{
                  width: '45%',
                  background: 'rgba(var(--surface-rgb),0.88)',
                  border: '1px solid rgba(var(--primary-rgb),0.12)',
                  borderRadius: 12,
                  padding: '20px 24px',
                }}>
                  <div style={{ fontFamily: 'Orbitron', fontSize: 22, fontWeight: 900, color: 'var(--primary)', marginBottom: 4 }}>{m.year}</div>
                  <div style={{ fontFamily: 'Orbitron', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{m.title}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{m.desc}</p>
                </div>
                {/* Center dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  boxShadow: '0 0 20px rgba(var(--primary-rgb),0.6)',
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { value: '20+', label: 'Years of Experience', icon: Award },
              { value: '14+', label: 'EV Models Available', icon: Zap },
              { value: '10K+', label: 'Satisfied Riders', icon: Users },
              { value: '500+', label: 'Pan-India Dealers', icon: MapPin },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} style={{
                background: 'rgba(var(--surface-rgb),0.88)',
                border: '1px solid rgba(var(--primary-rgb),0.1)',
                borderRadius: 16,
                padding: '32px 24px',
                textAlign: 'center',
              }}>
                <Icon size={28} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
                <div style={{ fontFamily: 'Orbitron', fontSize: 36, fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="width: '45%'"] { width: 80% !important; }
        }
      `}</style>
    </div>
  );
}

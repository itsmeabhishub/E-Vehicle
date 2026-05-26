"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';

export default function Hero() {
  const heroImage = products[0]?.images?.[0] ?? 'https://regalev.com/wp-content/uploads/2026/01/regal-hero.webp';

  return (
    <section style={{ padding: '84px 5% 40px', background: 'linear-gradient(180deg, var(--bg) 0%, rgba(var(--surface-rgb),0.96) 100%)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 520px', gap: 40, alignItems: 'center' }}>
        <div>
          <motion.div initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
            <div style={{ display: 'inline-block', background: 'rgba(var(--primary-rgb),0.12)', color: 'var(--primary)', padding: '6px 12px', borderRadius: 999, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>Ride The Future</div>
          </motion.div>

          <motion.h1 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'var(--text-primary)', fontSize: 48, lineHeight: 1.02, margin: '18px 0' }}>
            Smart Electric Vehicles For A Better Tomorrow
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 640 }}>
            Premium electric mobility for modern riders. Explore range-topping models, instant charging compatibility, and software-first vehicle experiences built for the future.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }} style={{ marginTop: 26, display: 'flex', gap: 12 }}>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 18px', borderRadius: 14, background: 'var(--primary)', color: 'var(--button-text)', fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 30px rgba(var(--primary-rgb),0.18)' }}>
              Explore EVs
              <ArrowRight size={16} />
            </Link>

            <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 18px', borderRadius: 14, background: 'transparent', border: '1px solid rgba(var(--text-primary-rgb),0.08)', color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Compare EVs
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} style={{ marginTop: 34, display: 'flex', gap: 28, color: 'var(--text-secondary)', fontSize: 14 }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 16 }}>520+ km</div>
              <div style={{ color: 'var(--text-secondary)' }}>Max Range</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 16 }}>30 min</div>
              <div style={{ color: 'var(--text-secondary)' }}>Fast Charge</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 16 }}>AWD</div>
              <div style={{ color: 'var(--text-secondary)' }}>Performance</div>
            </div>
          </motion.div>
        </div>

        <div style={{ position: 'relative', height: 560, minHeight: 560, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: 'rgba(var(--primary-rgb),0.18)', filter: 'blur(80px)', top: '-10%', left: '5%' }} />
            <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'rgba(var(--text-primary-rgb),0.06)', filter: 'blur(90px)', bottom: '-20%', right: '5%' }} />
            <div style={{ position: 'absolute', width: 140, height: 140, borderRadius: '50%', background: 'rgba(var(--primary-rgb),0.12)', filter: 'blur(52px)', top: '45%', right: '15%' }} />
          </div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="animate-float" style={{ position: 'relative', width: '100%', maxWidth: 680, height: '100%', borderRadius: 40, overflow: 'hidden', background: 'rgba(var(--surface-rgb),0.95)', boxShadow: '0 40px 120px rgba(0,0,0,0.18)', border: '1px solid rgba(var(--surface-rgb),0.14)' }}>
            <img src={heroImage} alt="Premium Regal EV vehicle" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 12%', transform: 'scale(1.05)' }} />
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(var(--surface-rgb),0), rgba(var(--surface-rgb),0.12))' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Shield, Users, Target, CheckCircle } from 'lucide-react';

const participantDetails = {
  name: 'Prateek Gupta',
  role: 'Lead Architect & Full-Stack AI Engineer',
  institution: 'Galgotias University',
  format: 'Individual Participation',
  track: 'Applied AI & Innovation Hacks',
  statement: 'Problem Statement 3: Digital Safety & Cybersecurity',
  contribution: 'End-to-end design and implementation of A.E.G.I.S.: negative-space mathematical engines, deterministic attention scoring, Elastic Common Schema normalizer for 8+ SIEM formats, air-gapped cryptographic audit ledger, and high-performance React 19 / FastAPI supervisory console.'
};

export default function About() {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <div style={{ 
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', 
          width: '64px', height: '64px', borderRadius: '16px', 
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', 
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)', marginBottom: '20px' 
        }}>
          <Shield size={32} color="var(--color-surface)" />
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-navy)', marginBottom: '8px' }}>
          A.E.G.I.S.
        </h1>
        <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-muted)', fontWeight: '500', maxWidth: '720px', margin: '0 auto' }}>
          Analytics & Evidence-based Governance Intelligence System
        </p>
        <div style={{ 
          display: 'inline-block', 
          marginTop: '12px', 
          padding: '6px 16px', 
          borderRadius: '999px', 
          background: 'rgba(37, 99, 235, 0.1)', 
          color: '#2563eb', 
          fontWeight: '600', 
          fontSize: '14px',
          border: '1px solid rgba(37, 99, 235, 0.2)'
        }}>
          HackNowa Global Hackathon 2026 · Digital Safety & Cybersecurity (Applied AI)
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
        <div style={{ background: 'var(--color-surface)', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Target size={24} color="var(--color-accent)" />
            <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>HackNowa Mission & Track</h2>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            Built specifically for <strong>HackNowa Global Hackathon 2026</strong> under the <strong>Digital Safety & Cybersecurity</strong> problem statement (<em>Applied AI Track</em>). It addresses modern cyber threats across Critical Sector Entities (CSEs) and enterprise SOCs by transforming passive log inspection into active supervisory intelligence.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['100% Deterministic AI & Anomaly Detection', 'Negative-Space Telemetry Void Discovery', 'Multi-SIEM Universal Normalization (8 Formats)', 'Cryptographic HMAC-SHA256 Audit Provenance'].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                <CheckCircle size={16} color="#10b981" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{ background: 'var(--color-surface)', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Shield size={24} color="#8b5cf6" />
            <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--color-navy)', margin: 0 }}>System Philosophy</h2>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
            We believe that <em>true cybersecurity governance</em> requires looking beyond raw alert counts. A.E.G.I.S. focuses on the <strong>evidence lifecycle</strong>—tracing the path from an initial signal to a finalized, mathematically verified conclusion.
          </p>
          <div style={{ background: 'var(--color-surface-subtle)', padding: '16px', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid #3b82f6', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)', fontStyle: 'italic' }}>
            "The absence of evidence is not the evidence of absence. A.E.G.I.S. ensures that what isn't monitored is just as visible as what is."
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', justifyContent: 'center' }}>
          <Users size={28} color="var(--color-navy)" />
          <h2 style={{ fontSize: 'var(--font-size-h1)', fontWeight: '800', color: 'var(--color-navy)', margin: 0 }}>Innovator & Developer Profile</h2>
        </div>
        
        <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: '32px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
            <div style={{ 
              width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e40af, #3b82f6)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: '24px' 
            }}>
              PG
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: 'var(--color-navy)' }}>{participantDetails.name}</h3>
              <span style={{ fontSize: '15px', color: '#2563eb', fontWeight: '600' }}>{participantDetails.role}</span>
              <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                {participantDetails.institution} · <strong>{participantDetails.format}</strong>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', background: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '6px', fontWeight: '500' }}>
              Track: {participantDetails.track}
            </span>
            <span style={{ fontSize: '12px', background: '#ecfdf5', color: '#047857', padding: '4px 10px', borderRadius: '6px', fontWeight: '500' }}>
              {participantDetails.statement}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            {participantDetails.contribution}
          </p>
        </div>
      </div>
    </div>
  );
}

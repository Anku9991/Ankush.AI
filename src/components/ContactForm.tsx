"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      company: formData.get('company'),
      requirement: formData.get('requirement'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection or contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="card glass" style={{ textAlign: 'center', padding: '3rem' }}>
        <i className="fa-solid fa-circle-check" style={{ fontSize: '4rem', color: '#27ae60', marginBottom: '1rem' }}></i>
        <h3>Enquiry Submitted!</h3>
        <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. Ankush will contact you shortly.</p>
        <button onClick={() => setSuccess(false)} className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="card glass">
      <form className="contact-form" onSubmit={handleSubmit}>
        {error && (
          <div style={{ background: 'rgba(255,50,50,0.1)', border: '1px solid #ff4444', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', color: '#ffaaaa' }}>
            {error}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" className="form-control" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" className="form-control" required placeholder="+91 9876543210" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" className="form-control" placeholder="john@company.com" />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company / Clinic Name</label>
          <input type="text" id="company" name="company" className="form-control" placeholder="City Hospital" />
        </div>
        <div className="form-group">
          <label htmlFor="requirement">Project Requirement *</label>
          <textarea id="requirement" name="requirement" className="form-control" rows={4} required placeholder="Describe what you are looking to build..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
          {loading ? 'Sending Request...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { gsap, useGSAP } from '@/lib/gsap';
import { EASE } from '@/lib/motion';
import { site } from '@/lib/site';
import { useReducedMotion } from '@/lib/useReducedMotion';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const headingWords = [
    { t: "LET'S" },
    { t: 'talk', serif: true },
  ];

  const QUICK_TOPICS = [
    { label: '💼 Opportunity', text: "Hi Syed, I came across your portfolio and would like to discuss an engineering role with our team..." },
    { label: '🎙️ Voice AI Project', text: "Hi Syed, I'd like to consult on a real-time voice system / LiveKit agent architecture..." },
    { label: '☕ Say Hello', text: "Hi Syed, reaching out to connect about your work in voice systems and AI agents!" },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  useEffect(() => {
    if (copiedToast) {
      const timer = setTimeout(() => setCopiedToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedToast]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setErrors({});
            setSubmitStatus(null);
          }
        });
      },
      { threshold: 0, rootMargin: '0px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (reduced) return;
      const card = cardRef.current;
      const cta = ctaRef.current;

      if (card) {
        gsap.fromTo(
          card,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: EASE.outCubic,
            scrollTrigger: { trigger: card, start: 'top 90%', once: true },
          }
        );
      }
      if (cta) {
        gsap.fromTo(
          cta,
          { x: 48, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: EASE.outCubic,
            scrollTrigger: { trigger: cta, start: 'top 94%', once: true },
          }
        );
      }
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateMessage = (text: string) => {
    const trimmed = text.trim();
    if (trimmed.length < 30) return false;
    const words = trimmed.split(/\s+/).filter(Boolean);
    return words.length >= 5;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (!validateMessage(formData.message))
      newErrors.message = 'Please enter a meaningful message (at least 30 characters, 5 words)';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nReply to: ${formData.email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      setSuccessMessage('Your email app should open with a draft. Review it and press Send there. Nothing has been sent by this website.');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting;

  return (
    <section ref={sectionRef} id="contact" className="bg-ink text-light pt-12 pb-16 md:pt-14 md:pb-24 relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full">
        <div
          ref={cardRef}
          className="rounded-3xl bg-surface text-light p-8 sm:p-12 md:p-16 lg:p-20 border border-elevated-dark"
        >
          <AnimatedHeading
            words={headingWords}
            className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-6 text-light"
          />
          <div className="max-w-2xl mb-12">
            <ScrollWordReveal
              text="Have a project in mind or just want to say hello? Feel free to reach out."
              offset={['start 0.95', 'end 0.7']}
              className="text-base sm:text-lg text-gray-soft font-sans leading-relaxed"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl space-y-6 p-6 sm:p-8 rounded-2xl mx-auto bg-surface-mid border border-white/[0.04]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-sm sm:text-base text-muted">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-xl bg-surface text-cream placeholder-[#6a6a68] focus:outline-none transition-all duration-300 border-white/[0.08] focus:border-accent focus:ring-1 focus:ring-accent/30 ${
                  errors.name ? 'border-red-500 focus:border-red-500' : ''
                }`}
                disabled={isDisabled}
              />
              {errors.name && <p id="name-error" className="text-red-400 text-xs sm:text-sm">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-sm sm:text-base text-muted">
                Your Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-xl bg-surface text-cream placeholder-[#6a6a68] focus:outline-none transition-all duration-300 border-white/[0.08] focus:border-accent focus:ring-1 focus:ring-accent/30 ${
                  errors.email ? 'border-red-500 focus:border-red-500' : ''
                }`}
                disabled={isDisabled}
              />
              {errors.email && <p id="email-error" className="text-red-400 text-xs sm:text-sm">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="message" className="font-medium text-sm sm:text-base text-muted">
                  Message <span className="text-red-400">*</span>
                </label>
                <span className="text-xs font-mono text-warm-light">Quick Prompts:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {QUICK_TOPICS.map((topic) => (
                  <button
                    key={topic.label}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, message: topic.text }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-surface border border-white/10 text-gray-soft hover:text-cream hover:border-accent/40 transition-colors cursor-pointer"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-xl bg-surface text-cream placeholder-[#6a6a68] resize-none focus:outline-none transition-all duration-300 border-white/[0.08] focus:border-accent focus:ring-1 focus:ring-accent/30 ${
                  errors.message ? 'border-red-500 focus:border-red-500' : ''
                }`}
                disabled={isDisabled}
              />
              {errors.message && <p id="message-error" className="text-red-400 text-xs sm:text-sm">{errors.message}</p>}
              <p className="text-xs text-gray-soft">{formData.message.length} / 30 minimum characters</p>
            </div>

            <div role="status" aria-live="polite">
              {errors.server && (
                <div className="p-4 bg-red-900/20 border border-red-600/40 rounded-xl mb-4">
                  <p className="text-red-400 text-sm">{errors.server}</p>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-600/40 rounded-xl mb-4">
                  <p className="text-green-400 text-sm">{successMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && !errors.server && (
                <div className="p-4 bg-red-900/20 border border-red-600/40 rounded-xl mb-4">
                  <p className="text-red-400 text-sm">Something went wrong. Please try again later.</p>
                </div>
              )}
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center gap-4 justify-between pt-2">
              <button
                type="submit"
                disabled={isDisabled}
                className="inline-block border-0 bg-transparent p-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                <AnimatedButton
                  topText={isDisabled ? 'PLEASE WAIT...' : 'OPEN EMAIL DRAFT'}
                  bottomText={isDisabled ? 'PROCESSING' : 'REVIEW & SEND ↗'}
                  variant="primary"
                  as="span"
                  className={isDisabled ? 'pointer-events-none' : ''}
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(site.email).then(() => setCopiedToast(true)).catch(() => {
                    window.location.href = `mailto:${site.email}`;
                  });
                }}
                className="text-xs font-mono uppercase tracking-wider text-warm-light hover:text-accent transition-colors py-2 px-3.5 rounded-lg border border-white/10 hover:border-accent/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Copy: {site.email}</span>
                <span className="text-accent">📋</span>
              </button>
            </div>
          </form>

          <div className="mt-16 pt-12 border-t border-elevated-dark flex flex-col items-center justify-center text-center w-full">
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
              <p className="text-xs uppercase tracking-widest text-warm mb-3 font-mono text-center">
                Direct Contact
              </p>

              <div ref={ctaRef} className="inline-block">
                <button
                  type="button"
                  aria-label={`Copy ${site.email} to clipboard`}
                  onClick={() => {
                    navigator.clipboard.writeText(site.email).then(() => setCopiedToast(true)).catch(() => {
                      window.location.href = `mailto:${site.email}`;
                    });
                  }}
                  className="group relative inline-flex items-center justify-center cursor-pointer text-light font-display font-black uppercase leading-tight hover:text-accent transition-colors duration-300 max-w-full text-center"
                  style={{
                    fontSize: 'clamp(1.1rem, 4.2vw, 3rem)',
                  }}
                >
                  <span className="break-all sm:break-normal">{site.email}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out block" />
                </button>
              </div>

              <span className="font-mono text-[11px] text-warm/70 uppercase tracking-widest mt-2 block text-center">
                Click to copy email address
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-8 left-8 z-[9998] pointer-events-none transition-all duration-300 shadow-xl ${
          copiedToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{
          background: '#34D399',
          color: '#0A0F0D',
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.75rem 1.25rem',
          borderRadius: '9999px',
        }}
      >
        ✓ Copied to clipboard
      </div>
    </section>
  );
};

export default Contact;

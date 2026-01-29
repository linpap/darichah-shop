'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface ContactFormData {
  name: string
  email: string
  orderNumber?: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-warm-cream min-h-screen">
      {/* Hero */}
      <section className="bg-royal-blue py-12 md:py-16">
        <div className="container-custom">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/customer-care" className="hover:text-white">
              Customer Care
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-serif text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 mb-6">
                <h2 className="text-lg font-serif text-royal-blue mb-4">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-antique-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-charcoal/60">Email</p>
                      <a
                        href="mailto:hello@darichah.com"
                        className="text-royal-blue hover:text-antique-gold transition-colors"
                      >
                        hello@darichah.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-antique-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-charcoal/60">Response Time</p>
                      <p className="text-charcoal">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-serif text-royal-blue mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/customer-care"
                      className="text-charcoal/70 hover:text-antique-gold transition-colors"
                    >
                      FAQ →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/customer-care/shipping"
                      className="text-charcoal/70 hover:text-antique-gold transition-colors"
                    >
                      Shipping Info →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/customer-care/returns"
                      className="text-charcoal/70 hover:text-antique-gold transition-colors"
                    >
                      Returns & Exchanges →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-xl font-serif text-royal-blue mb-6">
                  Send Us a Message
                </h2>

                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-charcoal mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal/70 mb-4">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-antique-gold font-medium hover:text-royal-blue transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-antique-gold focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Email *
                        </label>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-antique-gold focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="orderNumber"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Order Number (optional)
                        </label>
                        <input
                          {...register('orderNumber')}
                          type="text"
                          id="orderNumber"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-antique-gold focus:outline-none transition-colors"
                          placeholder="e.g., DAR-12345"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          {...register('subject', { required: 'Please select a subject' })}
                          id="subject"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-antique-gold focus:outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="order">Order Inquiry</option>
                          <option value="product">Product Question</option>
                          <option value="return">Return or Exchange</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="press">Press Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.subject && (
                          <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-antique-gold focus:outline-none transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-antique-gold text-royal-blue font-medium uppercase tracking-wider hover:bg-soft-gold transition-colors disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

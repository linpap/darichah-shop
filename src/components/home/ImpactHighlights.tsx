'use client'

import { motion } from 'framer-motion'

interface ImpactMetric {
  _id: string
  title: string
  value: string
  description?: string
  icon?: string
}

interface ImpactHighlightsProps {
  metrics?: ImpactMetric[]
}

const placeholderMetrics: ImpactMetric[] = [
  {
    _id: '1',
    title: 'Artisans Supported',
    value: '50+',
    description: 'Skilled craftspeople employed',
    icon: 'artisans',
  },
  {
    _id: '2',
    title: 'Families Impacted',
    value: '200+',
    description: 'Lives changed through fair wages',
    icon: 'families',
  },
  {
    _id: '3',
    title: 'Fair Wage Premium',
    value: '40%',
    description: 'Above local market rates',
    icon: 'wages',
  },
  {
    _id: '4',
    title: 'Women Artisans',
    value: '60%',
    description: 'Female empowerment focus',
    icon: 'women',
  },
]

const iconMap: Record<string, React.ReactNode> = {
  artisans: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  families: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  wages: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  women: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
}

export default function ImpactHighlights({ metrics }: ImpactHighlightsProps) {
  const displayMetrics = metrics?.length ? metrics : placeholderMetrics

  return (
    <section className="section-padding bg-warm-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-antique-gold text-sm uppercase tracking-widest">
              Our Impact
            </span>
            <h2 className="heading-lg mt-2">Every Purchase Makes a Difference</h2>
            <p className="text-charcoal/70 mt-4 max-w-2xl mx-auto">
              When you choose Darichah, you're not just buying jewellery — you're
              investing in communities and preserving centuries-old traditions.
            </p>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {displayMetrics.map((metric, index) => (
            <motion.div
              key={metric._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-soft-gold/20 text-antique-gold mb-4">
                {metric.icon && iconMap[metric.icon] ? iconMap[metric.icon] : iconMap.artisans}
              </div>
              <p className="text-3xl md:text-4xl font-serif text-royal-blue">
                {metric.value}
              </p>
              <p className="text-sm font-medium text-charcoal mt-2">
                {metric.title}
              </p>
              {metric.description && (
                <p className="text-xs text-charcoal/60 mt-1">
                  {metric.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/impact"
            className="inline-flex items-center gap-2 text-royal-blue font-medium hover:text-antique-gold transition-colors"
          >
            Learn More About Our Impact
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

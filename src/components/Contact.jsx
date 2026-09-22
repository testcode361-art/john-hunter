import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiCheck,
} from 'react-icons/hi'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'speaking',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-cream text-espresso overflow-hidden"
    >
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-96 h-96 border border-gold/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title text-espresso">Get in Touch</h2>
          <p className="text-espresso/60 max-w-2xl mx-auto text-lg">
            Invite John to speak, request a book signing, or simply say hello
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                {
                  icon: HiOutlineMail,
                  label: 'Email',
                  value: 'john@hunterfieldfund.org',
                },
                {
                  icon: HiOutlinePhone,
                  label: 'Phone',
                  value: 'Available upon request',
                },
                {
                  icon: HiOutlineLocationMarker,
                  label: 'Location',
                  value: 'Full-time RV — serving nationwide',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 bg-ivory rounded-2xl p-6 shadow-lg shadow-espresso/5 border border-gold/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-xl text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-espresso/50 font-medium uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-espresso font-semibold mt-1">{item.value}</div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-espresso text-ivory rounded-2xl p-6 mt-8">
                <h4 className="font-display text-lg font-bold text-gold mb-2">
                  Hunter Field Fund
                </h4>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  Supporting missions in India and around the world. Contact John directly
                  for giving information or partnership opportunities.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-ivory rounded-3xl p-8 md:p-10 shadow-xl shadow-espresso/10 border border-gold/10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6"
                  >
                    <HiCheck className="text-4xl text-gold" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-espresso mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-espresso/60">
                    John or Sandra will be in touch soon. God bless you.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-espresso/70 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-espresso/15 bg-cream/50 text-espresso focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-espresso/70 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-espresso/15 bg-cream/50 text-espresso focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-espresso/70 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-espresso/15 bg-cream/50 text-espresso focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    >
                      <option value="speaking">Speaking Engagement</option>
                      <option value="book-signing">Book Signing</option>
                      <option value="seminar">Seminar / Conference</option>
                      <option value="revival">Revival</option>
                      <option value="missions">Hunter Field Fund / Missions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-espresso/70 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-espresso/15 bg-cream/50 text-espresso focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                      placeholder="Tell John about your event, church, or question..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
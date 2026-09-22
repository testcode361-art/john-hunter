import { motion } from 'framer-motion'
import { AnimatedSection, staggerContainer, fadeInUp } from './AnimatedSection'
import {
  HiOutlineMicrophone,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineBookOpen,
} from 'react-icons/hi'

const services = [
  {
    icon: HiOutlineMicrophone,
    title: 'Speaking Engagements',
    description:
      'Inspiring messages for churches, conferences, and special events grounded in decades of ministry experience.',
  },
  {
    icon: HiOutlineBookOpen,
    title: 'Book Signings',
    description:
      'Meet John in person, get your copy of "Living The Christian Life" signed, and hear the stories behind the book.',
  },
  {
    icon: HiOutlineUsers,
    title: 'Seminars & Conferences',
    description:
      'Practical Biblical teaching for adults and children, including Bible memory and Bible Drills.',
  },
  {
    icon: HiOutlineGlobe,
    title: 'Revivals & Missions',
    description:
      'Supporting missions in India and around the world through the Hunter Field Fund.',
  },
]

export default function Ministry() {
  return (
    <section
      id="ministry"
      className="relative py-24 md:py-32 bg-espresso overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #D59A4A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title text-ivory">Ministry Services</h2>
          <p className="text-ivory/60 max-w-2xl mx-auto text-lg">
            Available by appointment for speaking engagements, book signings, seminars,
            conferences, and revivals
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group bg-charcoal/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="text-2xl text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-ivory mb-3">
                {service.title}
              </h3>
              <p className="text-ivory/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="mt-20 text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="font-display text-2xl md:text-3xl text-ivory/90 italic leading-relaxed">
              "We have done mission work in Arizona, Georgia, and Missouri. We support
              missions in India and around the world through the Hunter Field Fund."
            </p>
            <footer className="mt-6 text-gold font-semibold tracking-wide">
              — John & Sandra Hunter
            </footer>
          </motion.blockquote>
        </AnimatedSection>
      </div>
    </section>
  )
}
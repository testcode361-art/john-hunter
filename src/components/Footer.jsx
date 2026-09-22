import { motion } from 'framer-motion'
import { HiOutlineHeart } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/20 py-6 relative overflow-hidden">
      {/* Soft gold ambient glow at the top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Single horizontal row — brand | highlighted button | nav links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Logo + Name (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 order-1"
          >
            <img
              src="/logoName.png"
              alt="John F. Hunter logo"
              className="h-10 w-10 object-contain rounded-full ring-1 ring-gold/40"
              loading="lazy"
            />
            <div className="text-left">
              <h3 className="font-display text-lg font-bold text-ivory leading-tight">
                John <span className="text-gold">F. Hunter</span>
              </h3>
              <p className="text-ivory/50 text-xs">
                Author • Pastor • Missionary • Evangelist
              </p>
            </div>
          </motion.div>

          {/* Highlighted Launch Portal Button (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="order-2"
          >
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative group inline-flex items-center gap-2
                px-5 py-2 sm:px-6 sm:py-2.5
                bg-gradient-to-r from-[#F0B465] via-[#FFD27A] to-[#D59A4A]
                text-charcoal text-xs sm:text-sm font-bold tracking-wide
                rounded-full
                shadow-[0_0_20px_rgba(213,154,74,0.55)]
                hover:shadow-[0_0_35px_rgba(240,180,101,0.9)]
                transform transition-all duration-300
                hover:scale-105
                border border-amber/60
                overflow-hidden
              "
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>

              {/* Pulsing outer ring */}
              <span className="absolute inset-0 rounded-full ring-2 ring-gold/40 animate-pulse pointer-events-none"></span>

              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-rocket text-charcoal text-xs"></i>
                Launch &amp; Go-Live Portal
                <i className="fas fa-arrow-right text-charcoal text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </a>
          </motion.div>

          {/* Nav Links (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-5 text-sm text-ivory/60 order-3"
          >
            {['Home', 'About', 'Books', 'Ministry', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 pt-4 border-t border-espresso/30 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-ivory/40"
        >
          <p>© {new Date().getFullYear()} John F. Hunter. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <HiOutlineHeart className="text-gold" /> for the Kingdom
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
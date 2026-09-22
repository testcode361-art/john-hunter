import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineBookOpen } from 'react-icons/hi'

const AMAZON_LIVING = 'https://www.amazon.com/Living-Christian-Life-John-Hunter-ebook/dp/B08QDWGFR4/ref=sr_1_1?crid=3KIHFY6OU2DQW&dib=eyJ2IjoiMSJ9.DeW9Wq0nFToUip_x_z6oXRJ8LCCMjgNcaVvn2Ss9wO1Sz2-t_k5AxNIK-DFWMnyV_6rFeEl89hIGwvXXuQWwC0a9CTgMlB2DYFEV_A8YcTUHdSmUE64zQa_wbt8pMPNeiWWUfWNTIlAuIjGw5wcK-ZAryfj3h_J4DhLMNAQqx3DBd4C-Q2O-F_RpptepT-la6RM6oR9cZh6DlXaGHuXdEECPxhjNG7BpuuIPCHn91FM.W4d6MJK0NtMyblUt9hoQc2VSmpBq9gxUR_UcHx-xKVY&dib_tag=se&keywords=Living+The+Christian+Life+by+John+Hunter&qid=1790108832&s=digital-text&sprefix=living+the+christian+life+by+john+hunter%2Cdigital-text%2C392&sr=1-1'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gold blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-amber blur-[150px]"
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm mb-8"
        >
          <HiOutlineBookOpen />
          <span>Author • Pastor • Missionary • Evangelist</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-ivory leading-tight mb-6"
        >
          John F.
          <span className="block animate-shimmer">Hunter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-ivory/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Retired prison chaplain, pastor, missionary, and evangelist sharing Biblical
          truth and supernatural adventures from a life lived in faith.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href={AMAZON_LIVING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineBookOpen /> Buy Living The Christian Life
          </motion.a>
          <motion.button
            onClick={() => scrollTo('#about')}
            className="px-8 py-3 rounded-full border-2 border-gold/50 text-ivory font-semibold transition-all duration-300 hover:border-gold hover:bg-gold/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About John
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <HiArrowDown size={28} />
      </motion.button>
    </section>
  )
}
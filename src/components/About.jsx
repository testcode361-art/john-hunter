import { motion } from 'framer-motion'
import { AnimatedSection, staggerContainer, fadeInUp } from './AnimatedSection'
import {
  HiOutlineAcademicCap,
  HiOutlineGlobe,
  HiOutlineHeart,
  HiOutlineBookOpen,
} from 'react-icons/hi'

const AMAZON_LIVING = 'https://www.amazon.com/Living-Christian-Life-John-Hunter-ebook/dp/B08QDWGFR4/ref=sr_1_1?crid=3KIHFY6OU2DQW&dib=eyJ2IjoiMSJ9.DeW9Wq0nFToUip_x_z6oXRJ8LCCMjgNcaVvn2Ss9wO1Sz2-t_k5AxNIK-DFWMnyV_6rFeEl89hIGwvXXuQWwC0a9CTgMlB2DYFEV_A8YcTUHdSmUE64zQa_wbt8pMPNeiWWUfWNTIlAuIjGw5wcK-ZAryfj3h_J4DhLMNAQqx3DBd4C-Q2O-F_RpptepT-la6RM6oR9cZh6DlXaGHuXdEECPxhjNG7BpuuIPCHn91FM.W4d6MJK0NtMyblUt9hoQc2VSmpBq9gxUR_UcHx-xKVY&dib_tag=se&keywords=Living+The+Christian+Life+by+John+Hunter&qid=1790108832&s=digital-text&sprefix=living+the+christian+life+by+john+hunter%2Cdigital-text%2C392&sr=1-1'

const highlights = [
  { icon: HiOutlineBookOpen, label: '11 Years', sub: 'Prison Chaplain' },
  { icon: HiOutlineHeart, label: '48 Years', sub: 'Married to Sandra' },
  { icon: HiOutlineGlobe, label: 'Global', sub: 'Mission Work' },
  { icon: HiOutlineAcademicCap, label: 'Educated', sub: 'Midwestern Seminary' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-cream text-espresso overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -right-32 w-64 h-64 border border-gold/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-96 h-96 border border-gold/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title text-espresso">About the Author</h2>
          <p className="text-espresso/70 max-w-2xl mx-auto text-lg">
            A life devoted to faith, family, and service
          </p>
        </AnimatedSection>

        {/* Author Photo + Intro */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          {/* Photo */}
          <AnimatedSection className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-sm"
            >
              {/* Gold frame glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/40 via-amber/20 to-gold/40 rounded-3xl blur-2xl" />

              {/* Rotating decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 border border-dashed border-gold/40 rounded-full"
              />

              {/* Photo frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-gold/60 shadow-2xl shadow-espresso/30 bg-espresso">
                <img
                  src="/johnHunter.jpg"
                  alt="John F. Hunter, author and retired prison chaplain"
                  className="w-full h-auto object-cover aspect-[4/5]"
                  loading="lazy"
                />
                {/* Bottom gradient overlay with name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent p-6 pt-16">
                  <p className="font-display text-2xl font-bold text-ivory">
                    John F. Hunter
                  </p>
                  <p className="text-gold text-sm tracking-wide">
                    Author • Chaplain (Ret.) • Bible Teacher
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-gold rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-gold rounded-br-3xl" />
            </motion.div>
          </AnimatedSection>

          {/* Intro text */}
          <AnimatedSection className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-espresso/70 text-xs tracking-widest uppercase font-semibold">
                Meet the Author
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-espresso leading-tight">
                A Lifetime of Faith, Service &amp;{' '}
                <span className="text-gold">Supernatural Adventures</span>
              </h3>
              <p className="text-espresso/80 leading-relaxed text-lg">
                John F. Hunter is a retired prison chaplain, pastor, missionary, and
                evangelist. He has been married to his wife,{' '}
                <strong className="text-espresso">Sandra</strong>, for forty-eight years,
                and together they have raised four grown children: John Jeffrey, Jennifer,
                Jamie, and Joy.
              </p>
              <p className="text-espresso/80 leading-relaxed text-lg">
                Today, John and Sandra are full-time ministry volunteers, living and
                serving from their RV, and supporting missions in India and around the
                world through the{' '}
                <strong className="text-espresso">Hunter Field Fund</strong>.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-ivory rounded-xl p-4 border border-gold/10 shadow-sm">
                  <p className="text-xs text-espresso/50 uppercase tracking-wider">
                    Military
                  </p>
                  <p className="font-display font-bold text-espresso mt-1">
                    Retired MSG, US Army
                  </p>
                </div>
                <div className="bg-ivory rounded-xl p-4 border border-gold/10 shadow-sm">
                  <p className="text-xs text-espresso/50 uppercase tracking-wider">
                    Known As
                  </p>
                  <p className="font-display font-bold text-espresso mt-1">
                    "Buddy John"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-ivory rounded-2xl p-6 text-center shadow-lg shadow-espresso/5 border border-gold/10 transition-all duration-300"
            >
              <item.icon className="text-3xl text-gold mx-auto mb-3" />
              <div className="font-display text-2xl font-bold text-espresso">
                {item.label}
              </div>
              <div className="text-sm text-espresso/60 mt-1">{item.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio + Military / Ministry */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-espresso/80 leading-relaxed text-lg"
            >
              <p>
                <span className="font-display text-3xl font-bold text-gold float-left mr-3 leading-none">
                  C
                </span>
                haplain Hunter retired after eleven years as a Prison Chaplain for the
                Missouri Department of Corrections. He has developed many Biblical studies
                for adults and children. Now sixty-seven years old, John is known and
                respected by pastors, ministry organizations, and churches in many states
                and as far as India.
              </p>
              <p>
                He studied with Midwestern Baptist Theological Seminary and other Christian
                colleges, and holds degrees in Business and Sociology from Columbia College
                in Columbia, Missouri. Today, much of John's ministry is with children and
                youth, who call him{' '}
                <em className="text-gold font-semibold">"Buddy John"</em> and love him like
                a grandfather.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-espresso text-ivory rounded-2xl p-8 shadow-xl">
                <h3 className="font-display text-2xl font-bold text-gold mb-4">
                  Military Service
                </h3>
                <p className="text-ivory/80 leading-relaxed">
                  Retired MSG John F. Hunter was a Chaplain Assistant in Vietnam and served
                  in the US Army and the Missouri Army National Guard. He served three years
                  on the National Guard Bureau's Chaplain's Advisory Board.
                </p>
              </div>

              <div className="bg-espresso text-ivory rounded-2xl p-8 shadow-xl">
                <h3 className="font-display text-2xl font-bold text-gold mb-4">
                  Ministry Today
                </h3>
                <p className="text-ivory/80 leading-relaxed">
                  John and Sandy taught Bible memory and Bible Drills at Summer Bible camps,
                  and John teaches for Youth groups at Cowboy Churches. He is available for
                  speaking engagements, book signings, seminars, conferences, and revivals
                  by appointment.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Featured Book Teaser */}
        <AnimatedSection className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-charcoal text-ivory rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl"
          >
            <img
              src="life.jpg"
              alt="Living The Christian Life book cover"
              className="w-40 md:w-56 rounded-lg shadow-xl border border-gold/30"
              loading="lazy"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="text-gold text-xs tracking-widest uppercase mb-2">
                Featured Book
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-ivory mb-3">
                Living The Christian Life
              </h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                The most complete and easy-to-understand explanation of Christianity you
                will ever see. A step-by-step guide for new believers and a challenge for
                experienced Christians.
              </p>
              <a
                href={AMAZON_LIVING}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <HiOutlineBookOpen /> Buy on Amazon
              </a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
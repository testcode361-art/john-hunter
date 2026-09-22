import { motion } from 'framer-motion'
import { AnimatedSection, staggerContainer, fadeInUp } from './AnimatedSection'
import { HiOutlineBookOpen, HiStar, HiOutlineExternalLink } from 'react-icons/hi'

const books = [
  {
    title: 'Living The Christian Life',
    edition: '3rd Edition',
    author: 'John F. Hunter',
    description:
      'The most complete and easy to understand explanation of Christianity you will ever see. What is a true Christian? What do they believe?',
    details: [
      'Biblical Salvation, Church Membership, Baptism & Communion',
      'The six vital ways to grow spiritually mature',
      'How to Live Forever — no fancy words or confusing terminology',
      'True life Supernatural Adventures from John & Sandy',
      'A step-by-step guide for new and experienced Christians',
    ],
    image: 'life.jpg',
    amazon:
      'https://www.amazon.com/Living-Christian-Life-John-Hunter-ebook/dp/B08QDWGFR4/ref=sr_1_1?crid=3KIHFY6OU2DQW&dib=eyJ2IjoiMSJ9.DeW9Wq0nFToUip_x_z6oXRJ8LCCMjgNcaVvn2Ss9wO1Sz2-t_k5AxNIK-DFWMnyV_6rFeEl89hIGwvXXuQWwC0a9CTgMlB2DYFEV_A8YcTUHdSmUE64zQa_wbt8pMPNeiWWUfWNTIlAuIjGw5wcK-ZAryfj3h_J4DhLMNAQqx3DBd4C-Q2O-F_RpptepT-la6RM6oR9cZh6DlXaGHuXdEECPxhjNG7BpuuIPCHn91FM.W4d6MJK0NtMyblUt9hoQc2VSmpBq9gxUR_UcHx-xKVY&dib_tag=se&keywords=Living+The+Christian+Life+by+John+Hunter&qid=1790108832&s=digital-text&sprefix=living+the+christian+life+by+john+hunter%2Cdigital-text%2C392&sr=1-1',
    featured: true,
  },
  {
    title: 'GOD SPEAKS WORDS OF LIFE',
    edition: 'Supernatural and Spiritual',
    author: 'John F. Hunter',
    description:
      "The most complete and easy to understand explanation of God's words for life you have ever seen. What is a true Christian? What do they believe?",
    details: [
      'Biblical salvation, church membership, baptism & communion',
      'The six ways to grow spiritually mature',
      'How to live forever — without fancy words or confusing terminology',
      "The author's own supernatural adventures of trusting God",
      'Challenges both youth and adults to grow spiritually',
    ],
    image: 'words.jpg',
    amazon:
      'https://www.amazon.com/GOD-SPEAKS-WORDS-LIFE-Supernatural-ebook/dp/B07GNHGMBN?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.5cnJ471CTj15u6cAjp96toZyn-g6f4Je_HY79sBo3WzGjHj071QN20LucGBJIEps.xaO4ViEu8emr31wttIKb4psyJSdd4tPQA1aanETsr14&dib_tag=AUTHOR',
    featured: false,
  },
  {
    title: 'The Amazing Adventurers of Buddy John and Grandpa Jerry',
    edition: 'Volume Book 1',
    author: 'John Hunter & Jerry Gladden',
    description:
      'A collection of real and amazing stories that will empower you to work and live with faith. Both Buddy John and Grandpa Jerry experience the power of loving and living by the Word of God.',
    details: [
      'Real, true stories of faith in daily life',
      'Empowering testimonies of trusting God',
      'Perfect for children, youth, and families',
      'Meet "Buddy John" — loved like a grandfather',
      'A series of Amazing True Stories',
    ],
    image: 'grandpa.jpg',
    amazon:
      'https://www.amazon.com/Amazing-Adventurers-Buddy-Grandpa-Jerry-ebook/dp/B07TSSV9YH?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.5cnJ471CTj15u6cAjp96toZyn-g6f4Je_HY79sBo3WzGjHj071QN20LucGBJIEps.xaO4ViEu8emr31wttIKb4psyJSdd4tPQA1aanETsr14&dib_tag=AUTHOR',
    featured: false,
  },
]

export default function Books() {
  return (
    <section id="books" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold blur-[200px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title text-ivory">Published Works</h2>
          <p className="text-ivory/60 max-w-2xl mx-auto text-lg">
            Available from Amazon or order at your local bookstore
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-20"
        >
          {books.map((book, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Book Cover */}
              <motion.div
                whileHover={{ rotateY: i % 2 === 0 ? 5 : -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`flex justify-center ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
                style={{ perspective: 1000 }}
              >
                <div className="relative w-64 md:w-80">
                  <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full scale-90" />

                  {book.featured && (
                    <div className="absolute -top-3 -right-3 z-20 px-3 py-1 rounded-full bg-gold text-charcoal text-xs font-bold uppercase tracking-wider shadow-lg">
                      ★ Bestseller
                    </div>
                  )}

                  <img
                    src={book.image}
                    alt={`${book.title} book cover`}
                    className="relative w-full rounded-lg shadow-2xl border border-gold/30 object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Details */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {book.featured && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase mb-4">
                      <HiStar /> Featured Release
                    </div>
                  )}
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-ivory mb-2">
                    {book.title}
                  </h3>
                  {book.edition && (
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                      {book.edition}
                    </p>
                  )}
                  <p className="text-ivory/50 text-sm mb-4 italic">by {book.author}</p>
                  <p className="text-ivory/70 text-lg leading-relaxed mb-6">
                    {book.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {book.details.map((detail, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        className="flex items-start gap-3 text-ivory/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={book.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiOutlineBookOpen /> Buy on Amazon
                    </motion.a>
                    <motion.a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-gold/40 text-ivory font-semibold transition-all duration-300 hover:border-gold hover:bg-gold/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiOutlineExternalLink /> Request Signed Copy
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
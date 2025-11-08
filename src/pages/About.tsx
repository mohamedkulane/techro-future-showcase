import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';
import teamImage from '@/assets/about-team.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { icon: <FaRocket />, value: '20+', label: 'Projects Completed' },
  { icon: <FaUsers />, value: '50+', label: 'Happy Clients' },
  { icon: <FaTrophy />, value: '2+', label: 'Years Experience' },
  { icon: <FaHeart />, value: '99%', label: 'Client Satisfaction' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    icon: <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Quality',
    description: 'Every project is built with meticulous attention to detail and excellence.',
    icon: <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Partnership',
    description: 'We work closely with clients as trusted partners in their success.',
    icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Integrity',
    description: 'Honesty, transparency, and ethical practices guide everything we do.',
    icon: <FaHeart className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6">
              About TechRo Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 px-2 sm:px-0">
              Empowering businesses through innovative technology solutions since 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  TechRo Solutions was founded with a simple yet powerful vision: to make
                  advanced technology accessible to businesses of all sizes. We believe that
                  every organization deserves the tools to compete and thrive in the digital
                  age.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a
                  full-service technology company, serving clients across multiple industries.
                  Our commitment to excellence and innovation remains unchanged.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses looking to
                  transform their operations through intelligent software systems. Our team
                  combines technical expertise with deep industry knowledge to deliver
                  solutions that truly make a difference.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative order-1 md:order-2"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={teamImage}
                  alt="TechRo Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
            >
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-soft border border-border h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <FaRocket className="text-primary-foreground text-lg sm:text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  To empower businesses with innovative, reliable, and scalable technology
                  solutions that drive growth, efficiency, and competitive advantage in the
                  digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-soft border border-border h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <FaTrophy className="text-primary-foreground text-lg sm:text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  To be the leading provider of intelligent software systems, recognized for
                  our commitment to innovation, quality, and client success. We envision a
                  future where technology seamlessly enhances every aspect of business
                  operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Impact in Numbers</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2 sm:px-0">
              Trusted by businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full text-primary-foreground text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-card rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full">
                  <div className="text-primary mb-3 sm:mb-4">{value.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="bg-gradient-hero rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-strong max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 px-2 sm:px-0">
              Let's work together to build the future of your business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow text-sm sm:text-base">
                  Get in Touch
                </button>
              </a>
              <a href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-background/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-background/20 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base">
                  View Our Services
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FaRocket, FaCheck, FaUsers, FaCode, FaCog } from 'react-icons/fa';
import heroImage from '@/assets/hero-bg.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const systems = [
  {
    icon: <FaCog className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Pharmacy Management',
    description: 'Complete inventory, sales, and prescription management system for pharmacies.',
  },
  {
    icon: <FaCode className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Transaction & Payment',
    description: 'Secure payment processing and transaction management solutions.',
  },
  {
    icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'School Management',
    description: 'Comprehensive student, staff, and academic management platform.',
  },
  {
    icon: <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Modern websites',
    description: 'Custom website development and complete your business solution.',
  },
];

const features = [
  'Cloud-based solutions',
  'Real-time data processing',
  '24/7 technical support',
  'Scalable architecture',
  'Secure & encrypted',
  'Regular updates',
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <img
            src={heroImage}
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-2xl md:blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary-glow/20 rounded-full blur-2xl md:blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
                Building Smart Digital
                <br />
                <span className="text-primary-glow">Systems for the Future</span>
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-0"
            >
              We design and develop powerful technology systems for businesses
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <Link to="/demo" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full sm:w-auto shadow-glow text-sm sm:text-base">
                  <FaRocket className="mr-2 w-4 h-4" />
                  Explore Our Systems
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-sm sm:text-base"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Systems Highlight Section */}
      <section className="py-16 sm:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
              Our Core Systems
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Intelligent software solutions designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <div className="group bg-card rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-border h-full">
                  <div className="text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {system.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{system.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{system.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="text-center mt-8 sm:mt-12"
          >
            <Link to="/services">
              <Button variant="cta" size="lg" className="text-sm sm:text-base">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose TechRo Solutions?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                We combine cutting-edge technology with industry expertise to deliver
                solutions that drive real business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-primary text-xs" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8">
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-sm sm:text-base">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <div className="aspect-video bg-gradient-primary p-4 sm:p-6 md:p-8 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 border-4 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">Innovation in Motion</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2 sm:px-0">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8">
              Let's build something amazing together. Get started with TechRo Solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 text-sm sm:text-base">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/demo" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 text-sm sm:text-base"
                >
                  View Live Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaPills, FaCreditCard, FaGraduationCap, FaPalette, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const slideIn = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const systems = [
  {
    id: 'pharmacy',
    title: 'Pharmacy Management System',
    icon: <FaPills className="w-6 h-6 sm:w-8 sm:h-8" />,
    description:
      'A comprehensive pharmacy management solution that streamlines operations, from inventory tracking to prescription management.',
    features: [
      'Real-time inventory tracking with automated alerts',
      'Prescription management and refill reminders',
      'Sales and billing automation with multiple payment options',
      'Expiry date monitoring and batch tracking',
      'Customer database and purchase history',
      'Advanced reporting and analytics dashboard',
      'Multi-location support',
    ],
    color: 'from-blue-500 to-cyan-500',
    videoPlaceholder: 'Pharmacy System Demo Video',
  },
  {
    id: 'transaction',
    title: 'Transaction & Payment System',
    icon: <FaCreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
    description:
      'Secure, fast, and reliable payment processing platform built for modern businesses.',
    features: [
      'Support for multiple payment gateways',
      'Real-time transaction processing',
      'Advanced fraud detection and prevention',
      'Comprehensive transaction history and reporting',
      'Automated reconciliation and settlement',
      'PCI DSS compliance and security',
      'Mobile payment support',
      'Recurring billing and subscriptions',
    ],
    color: 'from-green-500 to-emerald-500',
    videoPlaceholder: 'Payment System Demo Video',
  },
  {
    id: 'school',
    title: 'School Management System',
    icon: <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
    description:
      'All-in-one educational platform designed to simplify school administration and enhance learning.',
    features: [
      'Student information and enrollment management',
      'Attendance tracking with automated notifications',
      'Grade and report card management',
      'Parent portal for real-time updates',
      'Fee management and online payment',
      'Timetable and class scheduling',
      'Teacher performance tracking',
      'Library and resource management',
    ],
    color: 'from-purple-500 to-pink-500',
    videoPlaceholder: 'School System Demo Video',
  },
  {
    id: 'branding',
    title: 'Modern websites & Small market systems',
    icon: <FaPalette className="w-6 h-6 sm:w-8 sm:h-8" />,
    description:
      'Custom software development and complete market solutions tailored to your unique business needs.',
    features: [
      'Custom software development from scratch',
      'Responsive Design',
      'Responsive web and mobile application development',
      'Modern UI/UX design and prototyping',
      'Smart Content Systems',
      'Performance Optimization',
      'Ongoing support and maintenance',
    ],
    color: 'from-orange-500 to-red-500',
    videoPlaceholder: 'Modern Services Showcase',
  },
];

export default function Demo() {
  const [activeTab, setActiveTab] = useState(systems[0].id);
  const activeSystem = systems.find((s) => s.id === activeTab) || systems[0];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Interactive System Demo
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 px-2 sm:px-0">
              Explore our powerful systems and see how they can transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Tab Selector */}
            <div className="lg:hidden mb-6">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full p-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {systems.map((system) => (
                  <option key={system.id} value={system.id}>
                    {system.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
              {/* Left Sidebar - Tabs */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="space-y-3 sticky top-24">
                  {systems.map((system) => (
                    <motion.button
                      key={system.id}
                      onClick={() => setActiveTab(system.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-4 md:p-6 rounded-xl transition-all duration-300 ${
                        activeTab === system.id
                          ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                          : 'bg-card hover:bg-muted border border-border shadow-soft'
                      }`}
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div
                          className={`flex-shrink-0 ${
                            activeTab === system.id ? 'text-primary-foreground' : 'text-primary'
                          }`}
                        >
                          {system.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-semibold mb-1 text-sm md:text-base ${
                              activeTab === system.id ? 'text-primary-foreground' : ''
                            }`}
                          >
                            {system.title}
                          </h3>
                          {activeTab === system.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`text-xs md:text-sm ${
                                activeTab === system.id
                                  ? 'text-primary-foreground/80'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              Click to view details
                            </motion.div>
                          )}
                        </div>
                      </div>
                      {activeTab === system.id && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          className="h-1 bg-primary-foreground/30 rounded-full mt-3"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right Content Area */}
              <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeIn}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 md:space-y-8"
                  >
                    {/* Video/Demo Preview */}
                    <motion.div
                      variants={slideIn}
                      transition={{ delay: 0.1 }}
                      className={`bg-gradient-to-br ${activeSystem.color} rounded-xl md:rounded-2xl overflow-hidden shadow-strong`}
                    >
                      <div className="aspect-video flex items-center justify-center p-6 sm:p-8 md:p-12">
                        <div className="text-center text-white">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
                          >
                            {activeSystem.icon}
                          </motion.div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                            {activeSystem.videoPlaceholder}
                          </h3>
                          <p className="text-white/80 text-sm sm:text-base">
                            Interactive demo coming soon
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* System Details */}
                    <motion.div
                      variants={slideIn}
                      transition={{ delay: 0.2 }}
                      className="bg-card rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-medium border border-border"
                    >
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                        {activeSystem.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
                        {activeSystem.description}
                      </p>

                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {activeSystem.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.3 }}
                            className="flex items-start space-x-2 sm:space-x-3"
                          >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FaCheck className="text-primary text-xs" />
                            </div>
                            <span className="text-xs sm:text-sm flex-1">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link to="/contact" className="flex-1">
                          <Button variant="hero" size="lg" className="w-full text-sm sm:text-base">
                            Request Demo
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                      variants={slideIn}
                      transition={{ delay: 0.3 }}
                      className="bg-gradient-hero rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-strong"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4">
                        Want to See {activeSystem.title} in Action?
                      </h3>
                      <p className="text-primary-foreground/90 mb-4 sm:mb-6 text-sm sm:text-base">
                        Schedule a personalized demo with our team to explore all features
                      </p>
                      <Link to="/contact">
                        <Button
                          variant="hero"
                          size="xl"
                          className="bg-background text-primary hover:bg-background/90 text-sm sm:text-base"
                        >
                          Book Consultation
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2 sm:px-0">
              Transform your business operations with our intelligent systems
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="cta" size="xl" className="w-full sm:w-auto text-sm sm:text-base">
                  Contact Sales
                </Button>
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="w-full sm:w-auto text-sm sm:text-base">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
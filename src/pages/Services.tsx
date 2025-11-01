import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  FaPills,
  FaCreditCard,
  FaGraduationCap,
  FaPalette,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: <FaPills className="w-12 h-12" />,
    title: 'Pharmacy Management System',
    description:
      'Comprehensive solution for managing pharmacy inventory, prescriptions, sales, and customer records.',
    features: [
      'Inventory tracking & alerts',
      'Prescription management',
      'Sales & billing automation',
      'Expiry date monitoring',
      'Customer database',
      'Reporting & analytics',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FaCreditCard className="w-12 h-12" />,
    title: 'Transaction & Payment System',
    description:
      'Secure and efficient payment processing platform with real-time transaction monitoring.',
    features: [
      'Multiple payment gateways',
      'Real-time processing',
      'Fraud detection',
      'Transaction history',
      'Automated reconciliation',
      
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FaGraduationCap className="w-12 h-12" />,
    title: 'School Management System',
    description:
      'All-in-one platform for managing students, staff, academics, and administrative tasks.',
    features: [
      'Student information system',
      'Attendance tracking',
      'Grade management',
      'Student portal',
      'Fee management',
      'Period scheduling',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaPalette className="w-12 h-12" />,
    title: 'Modern websites  & Small market systemes',
    description:
      'Custom software development and complete market solutions tailored to your business needs.',
    features: [
      'Custom software development',
      'Websites & E-commerce',
      'Modern UI/UX Design',
      'Responsive Design',
      'Performance Optimization',
      'Smart Content System',
      'Multi-page Structure',
     
    ],
    color: 'from-orange-500 to-red-500',
  },
];

const process = [
  { title: 'Plan', description: 'We analyze your requirements and create a strategic roadmap' },
  { title: 'Design', description: 'Our team designs intuitive and engaging user experiences' },
  { title: 'Develop', description: 'We build robust, scalable solutions using modern technology' },
  { title: 'Deliver', description: 'We deploy, train your team, and provide ongoing support' },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive technology solutions designed to drive business growth and efficiency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div
                      className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-strong min-h-[300px] flex items-center justify-center`}
                    >
                      <div className="text-white text-center">
                        <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/demo">
                      <Button variant="cta" size="lg">
                        Learn More
                        <FaArrowRight className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full border border-border">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-primary/30" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-hero rounded-2xl p-12 text-center shadow-strong"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-background text-primary hover:bg-background/90">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
                >
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

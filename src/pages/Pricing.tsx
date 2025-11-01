import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FaCheck, FaTimes } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const plans = [
  {
    name: 'Basic',
    price: { monthly: 25, yearly: 250 },
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 2 users',
      'Basic support',
      'Core features',
      'Mobile app access',
      'Monthly reports',
    ],
    notIncluded: [
      'Advanced analytics',
      'Custom integrations',
      'Dedicated support',
    ],
  },
  {
    name: 'Professional',
    price: { monthly: 40, yearly: 400 },
    description: 'Ideal for growing businesses',
    features: [
      'Up to 5 users',
      'Priority support',
      'All core features',
      'Advanced analytics',
      'Custom integrations',
      'Weekly reports',
      'API access',
    ],
    notIncluded: [
      'Dedicated account manager',
      'On-premise deployment',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', yearly: 'Custom' },
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited users',
      '24/7 dedicated support',
      'All features included',
      'Custom integrations',
      'On-premise deployment',
      'Dedicated account manager',
      'Custom SLA',
      'Advanced security',
      'Training & onboarding',
    ],
    notIncluded: [],
  },
];

const compareFeatures = [
  { name: 'Number of Users', basic: '2', pro: '5', enterprise: 'Unlimited' },
  { name: 'Storage', basic: '10 GB', pro: '100 GB', enterprise: 'Unlimited' },
  { name: 'Support', basic: 'Email', pro: 'Priority', enterprise: '24/7 Dedicated' },
  { name: 'API Access', basic: false, pro: true, enterprise: true },
  { name: 'Custom Integrations', basic: false, pro: true, enterprise: true },
  { name: 'Advanced Analytics', basic: false, pro: true, enterprise: true },
  { name: 'Dedicated Manager', basic: false, pro: false, enterprise: true },
  { name: 'Custom SLA', basic: false, pro: false, enterprise: true },
  { name: 'On-premise', basic: false, pro: false, enterprise: true },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Choose the perfect plan for your business needs
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-background/20 backdrop-blur-sm rounded-full p-1 border border-primary-foreground/30">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-background text-primary shadow-md'
                    : 'text-primary-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-background text-primary shadow-md'
                    : 'text-primary-foreground'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`relative bg-card rounded-2xl p-8 h-full flex flex-col ${
                    plan.popular
                      ? 'border-2 border-primary shadow-glow'
                      : 'border border-border shadow-soft'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold mb-1">
                      {typeof plan.price[billingCycle] === 'number' ? (
                        <>
                          ${plan.price[billingCycle]}
                          <span className="text-lg text-muted-foreground font-normal">
                            /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                          </span>
                        </>
                      ) : (
                        plan.price[billingCycle]
                      )}
                    </div>
                    {typeof plan.price[billingCycle] === 'number' &&
                      billingCycle === 'yearly' && (
                        <p className="text-sm text-muted-foreground">
                          ${((plan.price.yearly as number) / 12).toFixed(0)}/mo billed annually
                        </p>
                      )}
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheck className="text-primary text-xs" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 opacity-40">
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaTimes className="text-muted-foreground text-xs" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="block">
                    <Button
                      variant={plan.popular ? 'hero' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-xl text-muted-foreground">
              Compare features across all plans
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <div className="bg-card rounded-xl shadow-medium border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Basic</th>
                    <th className="text-center p-4 font-semibold bg-primary/5">Professional</th>
                    <th className="text-center p-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {compareFeatures.map((feature, index) => (
                    <tr
                      key={index}
                      className={`border-t border-border ${
                        index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                      }`}
                    >
                      <td className="p-4">{feature.name}</td>
                      <td className="text-center p-4">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <FaCheck className="text-primary inline" />
                          ) : (
                            <FaTimes className="text-muted-foreground inline" />
                          )
                        ) : (
                          feature.basic
                        )}
                      </td>
                      <td className="text-center p-4 bg-primary/5">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <FaCheck className="text-primary inline" />
                          ) : (
                            <FaTimes className="text-muted-foreground inline" />
                          )
                        ) : (
                          feature.pro
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <FaCheck className="text-primary inline" />
                          ) : (
                            <FaTimes className="text-muted-foreground inline" />
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
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
            className="bg-gradient-hero rounded-2xl p-12 text-center shadow-strong max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Not Sure Which Plan to Choose?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Our team is here to help you find the perfect solution for your needs
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-background text-primary hover:bg-background/90">
                Talk to Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

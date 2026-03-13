import { Award, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Slot Booking",
    description:
      "We secure earliest available US visa appointment slots — often within 24–72 hours of inquiry.",
    stat: "< 72 hrs",
    statLabel: "Average Booking Time",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description:
      "Our certified visa consultants have years of experience with US Embassy protocols and requirements.",
    stat: "10+ yrs",
    statLabel: "Combined Experience",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    description:
      "Our meticulous preparation and documentation review ensures the highest chances of approval.",
    stat: "95%+",
    statLabel: "Success Rate",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Every client gets a dedicated consultant who guides them through the entire visa process.",
    stat: "500+",
    statLabel: "Happy Clients",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 navy-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">
            Our Advantage
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Why Choose Us
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-navy-200 max-w-xl mx-auto">
            We combine speed, expertise, and personalized care to give you the
            best shot at your US visa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              data-ocid={`why.item.${i + 1}`}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-5">
                <div className="absolute inset-0 bg-gold-500/10 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute inset-0 border border-gold-500/20 rounded-2xl" />
                <reason.icon className="w-8 h-8 text-gold-400 relative z-10" />
              </div>
              <div className="mb-2">
                <span className="font-display text-3xl font-bold text-gold-400">
                  {reason.stat}
                </span>
                <p className="text-navy-300 text-xs uppercase tracking-wider mt-0.5">
                  {reason.statLabel}
                </p>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

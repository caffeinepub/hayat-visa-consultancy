import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarCheck,
  ClipboardCheck,
  FileText,
  MessageSquare,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: CalendarCheck,
    title: "Early US Visa Slot Booking",
    description:
      "We monitor US Embassy and Consulate appointment systems 24/7 to grab the earliest available slots for B1/B2, F1, H1B, and other visa categories.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Visa Documentation Assistance",
    description:
      "Our experts review and help prepare every document required for your US visa application, minimizing errors and rejection risk.",
    highlight: false,
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Comprehensive mock interview sessions with tips, common questions, and strategies tailored to your visa type and travel purpose.",
    highlight: false,
  },
  {
    icon: ClipboardCheck,
    title: "Application Review",
    description:
      "A thorough review of your DS-160 form and all supporting documents before submission to ensure accuracy and completeness.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mt-2 mb-4">
            Our Services
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end US visa assistance from slot booking to interview — we
            handle every step.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card
                className={`h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-navy ${
                  service.highlight
                    ? "border-gold-500 bg-navy-800 text-white"
                    : "border-border hover:border-navy-300"
                }`}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                      service.highlight ? "bg-gold-500/20" : "bg-navy-100"
                    }`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${
                        service.highlight ? "text-gold-400" : "text-navy-700"
                      }`}
                    />
                  </div>
                  <CardTitle
                    className={`font-display text-lg ${
                      service.highlight ? "text-white" : "text-navy-800"
                    }`}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-sm leading-relaxed ${
                      service.highlight
                        ? "text-navy-200"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>
                  {service.highlight && (
                    <span className="inline-block mt-4 bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

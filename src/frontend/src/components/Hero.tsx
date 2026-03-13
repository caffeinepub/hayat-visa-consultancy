import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden navy-gradient">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gold arc */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.12 85), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            🇺🇸 US Visa Appointment Specialists
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto"
        >
          Get Your <span className="gold-shimmer">Early US Visa</span>{" "}
          Appointment Slot Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-navy-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Hayat Visa Consultancy secures priority US visa appointment slots
          faster than anyone else in New Delhi. Skip the wait — our experts
          handle everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#contact" data-ocid="hero.primary_button">
            <Button
              size="lg"
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-lg px-8 py-6 shadow-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Free Consultation
            </Button>
          </a>
          <a href="tel:9718048734" data-ocid="hero.secondary_button">
            <Button
              size="lg"
              variant="outline"
              className="border-gold-500/50 text-gold-400 hover:bg-gold-500/10 text-lg px-8 py-6 font-semibold"
            >
              Call: 9718048734
            </Button>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-navy-300"
        >
          {[
            "500+ Visas Secured",
            "Same-Week Slots Available",
            "100% Transparent Process",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

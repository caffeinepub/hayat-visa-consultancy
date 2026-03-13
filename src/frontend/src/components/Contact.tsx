import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate, isPending, isSuccess } = useSubmitInquiry();

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    mutate(form, {
      onSuccess: () => {
        toast.success("Inquiry submitted! We'll contact you shortly.");
        setForm({ name: "", phone: "", email: "", message: "" });
      },
      onError: () => {
        toast.error("Something went wrong. Please call us directly.");
      },
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-800 mt-2 mb-4">
            Contact Us
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to secure your US visa slot? Reach out and our consultants
            will respond within hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-800 mb-6">
                Reach Us Directly
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:9718048734"
                  data-ocid="contact.primary_button"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-gold-400 group-hover:text-navy-900 transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                      Phone
                    </p>
                    <p className="font-bold text-navy-800 text-lg group-hover:text-gold-600 transition-colors">
                      9718048734
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Available Mon–Sat, 9am–7pm
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                      Address
                    </p>
                    <p className="font-semibold text-navy-800 leading-relaxed">
                      Uttam Nagar, New Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-xl overflow-hidden border border-border shadow-xs h-44 bg-navy-100 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Uttam+Nagar+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.link"
                className="text-navy-600 hover:text-gold-600 text-sm font-medium flex flex-col items-center gap-2 transition-colors"
              >
                <MapPin className="w-8 h-8" />
                View on Google Maps
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-border rounded-2xl p-8 shadow-navy">
              {isSuccess ? (
                <div
                  data-ocid="contact.success_state"
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our consultant will contact you
                    within a few hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-navy-700 font-medium text-sm"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        data-ocid="contact.input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p
                          data-ocid="contact.error_state"
                          className="text-destructive text-xs"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-navy-700 font-medium text-sm"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        data-ocid="contact.input"
                        type="tel"
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p
                          data-ocid="contact.error_state"
                          className="text-destructive text-xs"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-navy-700 font-medium text-sm"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      data-ocid="contact.input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-destructive text-xs"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-navy-700 font-medium text-sm"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.textarea"
                      placeholder="Tell us about your visa requirements, travel dates, visa type, etc."
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-destructive text-xs"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    size="lg"
                    className="w-full bg-navy-800 hover:bg-navy-700 text-gold-400 font-semibold gap-2 transition-all duration-200"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Inquiry
                      </>
                    )}
                  </Button>

                  {isPending && (
                    <p
                      data-ocid="contact.loading_state"
                      className="text-center text-sm text-muted-foreground"
                    >
                      Submitting your inquiry...
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

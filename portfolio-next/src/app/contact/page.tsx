"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // This is a mock submission. Replace with your actual form submission logic (e.g., API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus({ success: true, message: "Your message has been sent successfully!" });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  const socialLinks = [
    { icon: <Mail />, href: "mailto:adityakothari2003@gmail.com", name: "Email" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/aditya-kothari27/", name: "LinkedIn" },
    { icon: <Github />, href: "https://github.com/AdityaKothari27", name: "GitHub" },
  ];

  return (
    <div className="min-h-screen text-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">Get In Touch</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="flex items-center gap-4 p-4 rounded-lg glass-effect">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-text-secondary">Mumbai, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg glass-effect">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-text-secondary">+91 1234567890</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-effect text-white hover:text-primary hover:scale-110 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-background-lightest border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-background-lightest border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-background-lightest border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              {submitStatus && (
                <p className={`mt-4 text-center ${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus.message}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

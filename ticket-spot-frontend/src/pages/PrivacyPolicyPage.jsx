import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const fadeInUp = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      type: 'spring',
    },
  },
};

const headingFade = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, type: 'spring' },
  },
};

function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-container p-4 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        style={{ color: 'black' }}
        variants={headingFade}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 text-center mb-8"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
      >
        Learn how Ticket Spot collects, uses, and protects your information.
      </motion.p>

      {[
        {
          title: '1. Information We Collect',
          content:
            'We collect personal information including your name, email address, contact details, and payment information.',
        },
        {
          title: '2. How We Use Your Data',
          content:
            'Your data is used to process transactions, deliver event information, improve our services, and send communications.',
        },
        {
          title: '3. Cookies and Tracking',
          content:
            'We use cookies to enhance your experience, analyze traffic, and deliver personalized content.',
        },
        {
          title: '4. Data Sharing',
          content:
            'We don’t sell your data. It may be shared with trusted third parties like payment processors or for legal reasons.',
        },
        {
          title: '5. Data Security',
          content:
            'We implement strong encryption and safety protocols to protect your data.',
        },
        {
          title: '6. Your Rights',
          content:
            'You can access, update, or delete your data, and opt out of communications anytime.',
        },
        {
          title: '7. Policy Changes',
          content:
            'We may update this Privacy Policy. Continued use of our site means you accept any changes.',
        },
        {
          title: '8. Contact Us',
          content: (
            <>
              Have questions? Email us at{' '}
              <a href="mailto:privacy@ticketspot.com" className="text-blue-600 underline">
                privacy@ticketspot.com
              </a>
              .
            </>
          ),
        },
      ].map((section, index) => (
        <motion.section
          key={index}
          className="mb-10"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </motion.section>
      ))}

      <motion.p
        className="text-sm text-gray-500 mt-16 text-center"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
      >
        Last Updated: May 16, 2025
      </motion.p>
    </div>
  );
}

export default PrivacyPolicyPage;

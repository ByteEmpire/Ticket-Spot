import React from 'react';
import './TermsConditionsPage.css';
import { motion } from 'framer-motion';

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

function TermsConditionsPage() {
  return (
    <div className="terms-conditions-container p-4 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        style={{ color: 'black' }} 
        variants={headingFade}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
      >
        Terms & Conditions
      </motion.h1>

      {[
        {
          title: '1. Acceptance of Terms',
          content:
            'By accessing or using Ticket Spot, you agree to be bound by these Terms & Conditions and all applicable laws. If you do not agree, you are prohibited from using our services.',
        },
        {
          title: '2. Use of Our Service',
          content:
            'Ticket Spot allows users to browse, book, and purchase tickets for events. Users must provide accurate and complete information. We reserve the right to refuse service for violations or misuse.',
        },
        {
          title: '3. Booking & Payments',
          content:
            'All ticket bookings are subject to availability and confirmation of payment. Ticket Spot accepts various forms of payment, which are securely processed via third-party gateways.',
        },
        {
          title: '4. Cancellation & Refunds',
          content:
            'Refunds are subject to the event organizer’s policy. Ticket Spot will only process refunds for events canceled or postponed by the organizer. Service fees are non-refundable.',
        },
        {
          title: '5. User Responsibilities',
          content:
            'Users are responsible for maintaining the confidentiality of their account and password. You agree not to impersonate any person or use a false name while using the platform.',
        },
        {
          title: '6. Intellectual Property',
          content:
            'All content on Ticket Spot, including logos, text, images, and graphics, are the property of Ticket Spot and may not be used or reproduced without permission.',
        },
        {
          title: '7. Limitation of Liability',
          content:
            'Ticket Spot is not liable for any indirect or consequential loss or damage arising from the use of our services, including event cancellations, delays, or inaccuracies.',
        },
        {
          title: '8. Modifications',
          content:
            'Ticket Spot reserves the right to update or modify these terms at any time. Changes will be posted on this page with a revised effective date.',
        },
        {
          title: '9. Contact Us',
          content: (
            <>
              If you have any questions or concerns about these Terms & Conditions, please contact us at{' '}
              <a href="mailto:support@ticketspot.com" className="text-blue-600 underline">
                support@ticketspot.com
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
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#3C9EE7' }}>
            {section.title}
          </h2>
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

export default TermsConditionsPage;

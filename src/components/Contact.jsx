import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>

      <p className="contact-description">
        If you'd like to connect, feel free to reach out:
      </p>

      <p className="email">
        📧{' '}
        <a
          href="mailto:eluribhuvanavenkatachandu@gmail.com"
          className="contact-link"
        >
          eluribhuvanavenkatachandu@gmail.com
        </a>
      </p>

      <p className="phone">
        📞{' '}
        <a href="tel:+918074482788" className="contact-link">
          +91 80744 82788
        </a>
      </p>

      <a
        href="mailto:eluribhuvanavenkatachandu@gmail.com?subject=Let's%20Connect&body=Hi%20Bhuvana%2C%0A%0AI'd%20like%20to%20reach%20out%20regarding..."
        className="message-button"
      >
        Send Message
      </a>
    </section>
  );
};

export default Contact;

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
    href="mailto:eluribhuvanavenkatachandu@gmail.com?subject=Let's%20Connect&body=Hi%20Bhuvanavenkatachandu%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%20Please%20let%20me%20know%20a%20good%20time%20to%20talk.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C%0A[Your%20Name]"
    className="message-button"
  >
    Send Message
  </a>
    </section>
  );
};

export default Contact;

import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '60px', maxWidth: '800px', margin: 'auto', textAlign: 'left' }}>
      <h2>Contact</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginTop: '40px',
        }}
      >
        <a
          href="mailto:gauthamtkp@gmail.com"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            textDecoration: 'none',
            color: 'White',
            fontSize: '1.1rem',
          }}
        >
          <MdEmail style={{ fontSize: '1.8rem', color: '#d44638' }} />
          gauthamtkp@gmail.com
        </a>

        <a
          href="https://www.instagram.com/gauthm.____?igsh=MWVnaGp2YTRsaW14Yg=="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            textDecoration: 'none',
            color : 'White',
            fontSize: '1.1rem',
          }}
        >
          <FaInstagram style={{ fontSize: '1.8rem', color: '#E1306C' }} />
          @gauthm.___
        </a>

        <a
          href="https://www.linkedin.com/in/gautham-p-354635255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            textDecoration: 'none',
            color: 'White',
            fontSize: '1.1rem',
          }}
        >
          <FaLinkedin style={{ fontSize: '1.8rem', color: '#0077B5' }} />
          linkedin.com/in/gauthamp
        </a>
      </div>
    </section>
  );
};

export default Contact;

// AboutUs.jsx
import React from 'react';
import './aboutUs.css'; // Link to your external CSS file
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const isSpecialPage = true;
  return (
<div>
{isSpecialPage ? (
          <Navbar specialPageStyle />
        ) : (
          <Navbar />
        )}

    <div className="about-us-container">
      <section className="about-us-section">
        <h1>Welcome to Our Company</h1>
        <p>
          At [Your Company Name], we are passionate about [your mission or what your company does].
          Our journey started [mention the founding year or a brief history].
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>CEO & Co-Founder</p>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CTO & Lead Developer</p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Focus:</strong> We prioritize our customers' needs and satisfaction.</li>
          <li><strong>Innovation:</strong> Embracing creativity and pushing boundaries.</li>
          <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
          {/* Add more values as needed */}
        </ul>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to [briefly describe your company's mission and goals].
          We strive to [mention any specific objectives or impact you aim to achieve].
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Feel free to reach out to us at [your email address] or [phone number].
        </p>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;

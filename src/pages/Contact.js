import React, { useState } from 'react';
import '../CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setStatus('Nagakit80@gmail.com');
      setShowModal(true);
      return;
    }

    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="contact-container">
      <h1 className="form-title">Contact Me</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name" className="label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your name"
            className="input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your email address"
            className="input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message" className="label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            aria-label="Your message"
            className="textarea"
          />
        </div>
        <button type="submit" className="button">Send Message</button>
      </form>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p className={`notification-text ${status.includes('Please') ? 'error' : 'success'}`}>
              {status}
            </p>
            <button onClick={closeModal} className="modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

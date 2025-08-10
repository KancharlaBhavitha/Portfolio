// src/components/Contact/Contact.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_Bhavitha',       // Your Service ID
            'template_91dfs38',        // Your Template ID 
            form.current,
            'I_14ZQzMGZeNxNMdE'               // Your Public Key
        ).then(
            (result) => {
                alert('Message sent successfully!');
                form.current.reset(); // Clear form after success
            },
            (error) => {
                alert('Failed to send message. Try again.');
                console.error(error);
            }
        );
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h2 className="contact-title">Let's <span className="gradient-text">talk</span></h2>
                    <p className="contact-para">
                        I'm currently available for new projects. Feel free to message me about work, collaborations, or anything else.
                    </p>
                    <p className="contact-item">📧 bhavithakancharla27@gmail.com</p>
                    <p className="contact-item">📞 +91 6302983448</p>
                    <p className="contact-item">📍 Annamayya, Andhra Pradesh</p>
                </div>

                <div className="contact-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Your Name</label>
                        <input type="text" name="user_name" required placeholder="Enter your name" />

                        <label>Your Email</label>
                        <input type="email" name="user_email" required placeholder="Enter your email" />

                        <label>Your Message</label>
                        <textarea name="message" rows="5" required placeholder="Enter your message" />

                        <button type="submit" className="btn gradient-btn">Submit Now</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

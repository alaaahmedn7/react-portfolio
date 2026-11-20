    import { useState } from 'react';
    import emailjs from '@emailjs/browser';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';


    function Contact() {
    const [contactStatus, setContactStatus] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        if (!name || !email || !message) {
        setContactStatus('Please fill in all fields.');
        return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setContactStatus('Please enter a valid email address.');
        return;
        }

        setContactStatus('Sending your message...');

        try {
        await emailjs.send(
            'service_m08o0wq',
            'template_hfdpgu9',
            {
            name,
            email,
            message,
            time: new Date().toLocaleString(),
            },
            'aLL01SRi8K16oF0U2'
        );

        setContactStatus(
            'Your message has been sent successfully! Thank you for contacting me.'
        );

        e.target.reset();
        } catch (error) {
        console.error('EmailJS Error:', error);
        setContactStatus(
            'Sorry, your message could not be sent. Please try again.'
        );
        }
    };

    return (
        <div className={`portfolio ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar
            activeSection="contact"
            setActiveSection={() => {}}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
        />

        <section className="contact">
            <h2>
            Get In <span>Touch</span>
            </h2>

            <p className="contact-subtitle">
            Have a question or want to work together? Feel free to contact me!
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />

            <input type="email" name="email" placeholder="Your Email" required />

            <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
            />

            <button type="submit">Send Message</button>

            {contactStatus && (
                <p className="contact-status">{contactStatus}</p>
            )}
            </form>
        </section>
        <Footer />
        </div>
    );
    }

    export default Contact;

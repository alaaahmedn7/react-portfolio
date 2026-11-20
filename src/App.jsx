import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import emailjs from '@emailjs/browser';
import aboutImage from './assets/About-illustration.png';
import certificate1 from './assets/certificate-1.jpg';
import certificate2 from './assets/certificate-2.jpg';
import certificate3 from './assets/certificate-3.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';


function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showTopButton, setShowTopButton] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [contactStatus, setContactStatus] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  // Splash Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Active Navigation Section
  useEffect(() => {
    if (loading) return;

    const sections = document.querySelectorAll(
'#home, #about, #education, #certificates, #skills, #projects, #achievements, #contact'    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [loading]);

  // Back To Top Button
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (loading) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <img src={logo} alt="Alaa Logo" className="splash-logo" />

          <h1>Alaa Ahmed Noman</h1>

          <p className="splash-title">
            SOFTWARE ENGINEER (IT STUDENT)
          </p>

          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p className="loading-text">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
<div className={`portfolio ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
<Navbar
  activeSection={activeSection}
  setActiveSection={setActiveSection}
  isDarkMode={isDarkMode}
  setIsDarkMode={setIsDarkMode}
/>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Alaa </span> 👩🏻‍💻
          </h1>
          <h2>IT Student &amp; Aspiring Software Engineer</h2>
          <p>
            I'm a third-year Information Technology student
            passionate about programming, web development,
            and creating meaningful projects.
          </p>
          <a href="#projects" className="btn">
            Explore My Work</a>
        </div>
      </section>
      <section id="about" className="about-section">

  <div className="about-content">

    <h2>
      About <span>Me</span>
    </h2>

    <div className="about-text">
      <p>
        I'm a third-year Information Technology student
        with a passion for software development and web technologies.
      </p>

      <p>
        I enjoy turning ideas into practical projects,
        exploring new technologies, and continuously
        improving my programming skills.
      </p>

      <p>
        I'm always excited to learn, create, and take on
        new challenges as I work toward becoming a skilled
        Software Engineer.
      </p>
    </div>

    <div className="about-highlights">

      <div className="highlight-card">
        <span>🎓</span>
        <h4>IT Student</h4>
        <p>Third-Year</p>
      </div>

      <div className="highlight-card">
        <span>💻</span>
        <h4>Software</h4>
        <p>Development</p>
      </div>

      <div className="highlight-card">
        <span>🚀</span>
        <h4>Always</h4>
        <p>Learning</p>
      </div>

    </div>

  </div>

  <div className="about-image">
    <img
src={aboutImage}      alt="A student wearing a hijab and working on a laptop"
    />
  </div>
  </section>

{/* Education Section */}
<section className="education" id="education">
  <h2>My <span>Education</span></h2>

  <div className="education-container">

    <div className="education-card">
      <span className="education-icon">🎓</span>
      <h3>Bachelor's Degree in Information Technology</h3>
      <h4>University of Science and Technology</h4>
      <p>Third-Year Student</p>
    </div>

    <div className="education-card">
      <span className="education-icon">📚</span>
      <h3>Intensive English Language Course</h3>
      <h4>Arab Open University – Riyadh</h4>
      <p>Course Code: EL097</p>
      <p>120 Training Hours</p>
      <span className="education-date">September 2023 – October 2023</span>
    </div>

  </div>


</section>

{/* Certificates Section */}
<section className="certificates" id="certificates">

  <h2>My <span>Certificates</span></h2>

  <p className="certificates-subtitle">
    English Language Courses – Arab Open University
  </p>

  <div className="certificates-container">

    <div className="certificate-card">
      <img
src={certificate1}  alt="EL097 Certificate"
onClick={() => setSelectedCertificate(certificate1)}/>
      <h3>Intensive English Language Course</h3>
      <p>EL097 · 120 Hours</p>
      <span>September – October 2023</span>
    </div>

    <div className="certificate-card">
      <img
 src={certificate2}
 alt="EL098R Certificate"
onClick={() => setSelectedCertificate(certificate2)}/>
      <h3>Intensive English Language Course</h3>
      <p>EL098R · 120 Hours</p>
      <span>November 2023 – January 2024</span>
    </div>

    <div className="certificate-card">
      <img
    src={certificate3}
    alt="EL099 Certificate"
    onClick={() => setSelectedCertificate(certificate3)}
    />
      <h3>Intensive English Language Course</h3>
      <p>EL099 · 120 Hours</p>
      <span>January – March 2024</span>
    </div>

  </div>

</section>
        {/* Skills Section */}
<section className="skills" id="skills">
  <h2>My <span>Skills</span></h2>
  <div className="skills-container">

    <div className="skill-card">
    <h3>Programming</h3>
    <p>C++ · Java</p>
    </div>
    <div className="skill-card">
    <h3>Data Structures & Algorithms</h3>
    <p>Stack · Queue · Circular Queue · Linked List</p>
</div>
    <div className="skill-card">
    <h3>Web Development</h3>
      <p>HTML · CSS · JavaScript</p>
</div>

    <div className="skill-card">
    <h3>Database</h3>
    <p>SQL · Database Design</p>
</div>

    <div className="skill-card">
    <h3>Tools & Design</h3>
    <p>Arduino · Onshape</p>
</div>

    <div className="skill-card">
    <h3>Currently Learning</h3>
    <p>React · C#</p>
</div>

  </div>
</section>
{/* Projects Section */}
<section id="projects" className="projects">
  <h2>My <span>Projects</span></h2>

  <div className="projects-container">

    <ProjectCard
      title="Taiz Bus"
      description="A web-based public transportation project designed to present bus routes, schedules, and transportation information in Taiz city."
      image={null}
      link="https://alaaahmedn1.github.io/alaa-project/"
    />

    <ProjectCard
      title="StartBuild"
      description="An educational platform landing page introducing programming, web development, and database courses."
      image={null}
      link="https://alaaahmedn7.github.io/landing-page-project/"
    />

    <ProjectCard
      title="Student Management System"
      description="A C++ console application for managing student records, including adding, displaying, searching, updating, and deleting students, with grade and average calculations."
      image={null}
      link="https://github.com/alaaahmedn7/student-management-system"
    />

    <ProjectCard
      title="Stack Implementation"
      description="A C++ implementation of the Stack data structure using arrays, featuring basic stack operations and additional functionality."
      image={null}
      link="https://github.com/alaaahmedn7/stack-implementation"
    />

    <ProjectCard
      title="School Database Management System"
      description="A school database project built using SQL and Oracle Database, featuring tables for students, teachers, classes, subjects, grades, and registration with relational constraints."
      image={null}
      link="https://github.com/alaaahmedn7/school-database-management-system-4."    />

  </div>
</section>

{/* Achievements Section */}
<section className="achievements" id="achievements">
  <h2>Academic <span>Achievements</span></h2>

  <p className="achievements-subtitle">
    Hard work and dedication lead to excellence.
  </p>

  <div className="achievements-container">

    <div className="achievement-card">
      <div className="achievement-icon">🥇</div>
      <h3>4th Place</h3>
      <p>First Academic Year</p>
      <span>Ranked 4th in my class</span>
    </div>

    <div className="achievement-card">
      <div className="achievement-icon">🥈</div>
      <h3>2nd Place</h3>
      <p>Second Academic Year</p>
      <span>Ranked 2nd in my class</span>
    </div>

  </div>
</section>


{/* Contact Section */}
<section className="contact" id="contact">

  <h2>Get In <span>Touch</span></h2>

  <p className="contact-subtitle">
    Have a question or want to work together? Feel free to contact me!
  </p>
<form
  className="contact-form"
  onSubmit={async (e) => {
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
          name: name,
          email: email,
          message: message,
          time: new Date().toLocaleString()
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
  }}
>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
    />

    <textarea
      name="message"
      placeholder="Your Message"
      rows="6"
      required
    ></textarea>

    <button type="submit">Send Message</button>
{contactStatus && (
  <p className="contact-status">
    {contactStatus}
  </p>
)}
  </form>

</section>
{/* Footer Section */}
<footer className="footer">

  <div className="footer-content">

    <h3>Alaa Ahmed</h3>

    <p>
      IT Student & Aspiring Software Engineer
    </p>

  <div className="footer-social">
  <a
    href="https://github.com/Alaaahmedn1"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/alaa-ahmed-noman-86427a275"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    LinkedIn
  </a>
</div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Alaa Ahmed. All Rights Reserved.</p>
  </div>

</footer>
      {showTopButton && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
{selectedCertificate && (
    <div
        className="certificate-modal"
        onClick={() => setSelectedCertificate(null)}
    >
        <button
            className="close-certificate"
            onClick={() => setSelectedCertificate(null)}
        >
            ×
        </button>

        <img
            src={selectedCertificate}
            alt="Certificate"
            onClick={(e) => e.stopPropagation()}
        />
    </div>
)}
    </div>
  );
}

export default App;
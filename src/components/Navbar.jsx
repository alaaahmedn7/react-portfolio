    import logo from '../assets/logo.png';

    function Navbar({ activeSection, setActiveSection, isDarkMode, setIsDarkMode }) {
    return (
        <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Alaa Logo" />
        </div>

        <ul className="nav-links">
            <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                Home
            </a>
            </li>

            <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                About
            </a>
            </li>

            <li>
            <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
                Education
            </a>
            </li>

            <li>
            <a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''}>
                Certificates
            </a>
            </li>

            <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
                Skills
            </a>
            </li>

            <li>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                Projects
            </a>
            </li>

            <li>
            <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}>
                Achievements
            </a>
            </li>

            <li>
            <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setActiveSection('contact')}
            >
                Contact
            </a>
            </li>
        </ul>

        <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
        </nav>
    );
    }

    export default Navbar;
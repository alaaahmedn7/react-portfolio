import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ activeSection, setActiveSection, isDarkMode, setIsDarkMode }) {
const location = useLocation();

const sectionLink = (section) =>
    location.pathname === '/' ? `#${section}` : `/#${section}`;

return (
    <nav className="navbar">
    <div className="logo">
        <Link to="/">
        <img src={logo} alt="Alaa Logo" />
        </Link>
    </div>

    <ul className="nav-links">
        <li>
        <Link
        to="/"
        className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''}
        onClick={(e) => {
            if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }}
        >
        Home
        </Link>
        </li>
<li><Link to={sectionLink('about')}>About</Link></li>
<li><Link to={sectionLink('education')}>Education</Link></li>
<li><Link to={sectionLink('certificates')}>Certificates</Link></li>
<li><Link to={sectionLink('skills')}>Skills</Link></li>

        <li>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
        </Link>
        </li>

<li><Link to={sectionLink('achievements')}>Achievements</Link></li>
        <li>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
        </Link>
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
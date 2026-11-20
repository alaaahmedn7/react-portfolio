    import { Link } from 'react-router-dom';

    function Hero() {
    return (
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

            <Link to="/projects" className="btn">
            Explore My Work
            </Link>
        </div>
        </section>
    );
    }

    export default Hero;
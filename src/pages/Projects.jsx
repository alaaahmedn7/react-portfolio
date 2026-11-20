    import { useState } from 'react';
    import ProjectCard from '../components/ProjectCard';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    function Projects() {
    const [projects] = useState([
        {
        id: 1,
        title: 'Taiz Bus',
        description: 'A web-based public transportation project designed to present bus routes, schedules, and transportation information in Taiz city.',
        link: 'https://alaaahmedn1.github.io/alaa-project/',
        },
        {
        id: 2,
        title: 'StartBuild',
        description: 'An educational platform landing page introducing programming, web development, and database courses.',
        link: 'https://alaaahmedn7.github.io/landing-page-project/',
        },
        {
        id: 3,
        title: 'Student Management System',
        description: 'A C++ console application for managing student records.',
        link: 'https://github.com/alaaahmedn7/student-management-system',
        },
        {
        id: 4,
        title: 'Stack Implementation',
        description: 'A C++ implementation of the Stack data structure using arrays.',
        link: 'https://github.com/alaaahmedn7/stack-implementation',
        },
        {
        id: 5,
        title: 'School Database Management System',
        description: 'A school database project built using SQL and Oracle Database.',
        link: 'https://github.com/alaaahmedn7/school-database-management-system-4.',
        },
    ]);

    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className={`portfolio ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar
            activeSection="projects"
            setActiveSection={() => {}}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
        />

        <section id="projects" className="projects">
            <h2>My <span>Projects</span></h2>

            <div className="projects-container">
            {projects.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={null}
                link={project.link}
                />
            ))}
            </div>
        </section>

        <Footer />
        </div>
    );
    }

    export default Projects;
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Portfolio Website', description: 'My personal portfolio built with React.', link: 'https://github.com/username/portfolio' },
    { title: 'project2', description: '.....', link: 'https://github.com/username/todo-app' },
    { title: 'project3', description: '......', link: 'https://github.com/username/weather-app' },
    { title: 'project4', description: '.......', link: 'https://github.com/username/blog-platform' },
    { title: 'project5', description: '........', link: 'https://github.com/username/ecommerce-site' },
    { title: 'project6', description: '.........', link: 'https://github.com/username/chat-app' }
  ];

  return (
    <section id="projects" style={{ padding: '40px', maxWidth: '900px', margin: 'auto' }}>
      <h2>Projects</h2>
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-between'
        }}
      >
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{ 
              flexBasis: '30%',    // about 1/3 width with some gap
              border: '1px solid #ccc', 
              padding: '15px', 
              borderRadius: '8px',
              boxSizing: 'border-box'
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

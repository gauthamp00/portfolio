import React from 'react';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact color="#61DBFB" /> },
    { name: 'JavaScript', icon: <FaJsSquare color="#F0DB4F" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
    { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> }
  ];

  return (
    <section id="skills" style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Skills</h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',       // space between each skill
          flexWrap: 'wrap'   // wrap to next line on small screens
        }}
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',  // stack icon above name
              alignItems: 'center',
              fontSize: '1.2rem',
              width: '80px'
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>{skill.icon}</span>
            <span style={{ marginTop: '8px' }}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

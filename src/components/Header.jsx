import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#222', padding: '20px', color: 'white', textAlign:'right' }}>
      <h1 style={{textAlign:'center'}}>Gautham P</h1>
      <nav>
        <a href="#about" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Projects</a>
        <a href="#skills" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Skills</a>
        <a href="#contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;

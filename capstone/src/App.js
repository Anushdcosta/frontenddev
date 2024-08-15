import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Social from './components/Socials';

function App() {
    return (
        <div className="App">
            <Social />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;

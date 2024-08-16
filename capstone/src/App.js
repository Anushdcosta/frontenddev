import React from 'react';
import './App.css';
import './phoneApp.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Social from './components/Socials';
import Phonemenu from './components/PhoneMenu';

function App() {
    return (
        <div className="App">
            <Phonemenu />
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

import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Work from './pages/Work';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
};

export default App;

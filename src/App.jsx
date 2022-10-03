import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';
import MainHeader from './components/MainHeader';

const App = () => {
  return (
    <div className="App">
      <MainHeader />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
};

export default App;

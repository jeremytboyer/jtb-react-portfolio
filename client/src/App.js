import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getNames } from './utils';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {


 

  return (
    <div >
      <Header
         />

      <Routes>
        <Route path="/" element={(
          <Landing/>
        )} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

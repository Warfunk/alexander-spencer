import { useState, useMemo } from 'react';

import './App.css';
import Nav from './components/nav/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Intro from './components/Intro';

function App() {
  const [page, setPage] = useState('intro');

  const ui = useMemo(() => {
    if (page === 'intro') {
      return <Intro />;
    }
    if (page === 'about') {
      return <About />;
    }
    if (page === 'contact') {
      return <Contact />;
    }
    if (page === 'projects') {
      return <Projects />;
    }
  }, [page]);

  return (
    <div className='App'>
      <Nav page={page} setPage={setPage} />
      <div className='main'>{ui}</div>
    </div>
  );
}

export default App;

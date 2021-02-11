import { useState, useMemo } from 'react';

import './App.css';
import LeftNav from './LeftNav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Intro from './Intro';

function App() {
  const [page, setPage] = useState('intro');

  const ui = useMemo(() => {
    if (page === 'intro') {
      return <Intro />;
    } else if (page === 'about') {
      return <About />;
    } else if (page === 'contact') {
      return <Contact />;
    } else if (page === 'projects') {
      return <Projects />;
    }
  });

  return (
    <div className='App'>
      <LeftNav />
      <div className='main'>{ui}</div>
    </div>
  );
}

export default App;

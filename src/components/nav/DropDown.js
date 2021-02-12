import { useState } from 'react';

const DropDown = ({ setPage }) => {
  const [style, setDisplay] = useState('none');

  const divStyle = {
    display: style,
  };

  const changePage = (page) => {
    if (page === 'intro') {
      setPage('intro');
      setDisplay('none');
    } else if (page === 'projects') {
      setPage('projects');
      setDisplay('none');
    } else if (page === 'contact') {
      setPage('contact');
      setDisplay('none');
    } else if (page === 'about') {
      setPage('about');
      setDisplay('none');
    }
  };

  const toggleNav = () => {
    if (style === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };

  return (
    <div>
      <div className='dd' onClick={toggleNav}>
        <button className='btn'>
          <div className='hmbg'></div>
          <div className='hmbg'></div>
          <div className='hmbg'></div>
        </button>
      </div>
      <div style={divStyle} className='dd-nav'>
        <div className='p-nav'>
          <h3 onClick={() => changePage('intro')}>Intro</h3>
        </div>
        <div className='p-nav'>
          <h3 onClick={() => changePage('projects')}>Projects</h3>
        </div>
        <div className='p-nav'>
          <h3 onClick={() => changePage('about')}>About Me</h3>
        </div>
        <div className='p-nav'>
          <h3 onClick={() => changePage('contact')}>Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

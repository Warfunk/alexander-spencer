import { useState } from 'react';

const DropDown = ({ setPage }) => {
  const [style, setDisplay] = useState('none');

  const divStyle = {
    display: style,
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
          <h3 onClick={() => setPage('intro')}>Intro</h3>
        </div>
        <div className='p-nav'>
          <h3 onClick={() => setPage('about')}>About Me</h3>
        </div>
        <div className='p-nav'>
          <h3 onClick={() => setPage('contact')}>Contact</h3>
        </div>
        <div className='p-nav'>
          <h3 onClick={() => setPage('projects')}>Projects</h3>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

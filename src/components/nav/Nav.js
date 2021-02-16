import ghl from './ghl.png';
import './nav.css';
import linkedin from './linkedin.png';
import DropDown from './DropDown';

const Nav = ({ setPage }) => {
  return (
    <div>
      <div className='nav'>
        <div className='nav-name'>
          <h3 className='first'>Alexander</h3>
          <h3 className='last'> Spencer</h3>
        </div>
        <div className='pages'>
          <div className='p-nav'>
            <h3 onClick={() => setPage('intro')}>Intro</h3>
          </div>
          <div className='p-nav'>
            <h3 onClick={() => setPage('projects')}>Projects</h3>
          </div>
          <div className='p-nav'>
            <h3 onClick={() => setPage('about')}>About Me</h3>
          </div>

          <div className='p-nav'>
            <h3 onClick={() => setPage('contact')}>Contact</h3>
          </div>
        </div>
        <DropDown setPage={setPage} />
        <div className='social'>
          <div className='s1'>
            <a href='https://github.com/warfunk' target='_blank'>
              <img src={ghl} alt='github symbol' className='gh' />
            </a>
          </div>
          <div className='s2'>
            <a
              href='https://www.linkedin.com/in/alexander-s-b7167419b/'
              target='_blank'
            >
              <img src={linkedin} alt='github symbol' className='li' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import ghl from './ghl.png';
import linkedin from './linkedin.png';

const LeftNav = () => {
  return (
    <div className='left-nav'>
      <div className='nav-name'>
        <h3>Alexander</h3>
        <h3> Spencer</h3>
      </div>
      <div className='pages'>
        <div className='p-nav'>
          <h3>Intro</h3>
        </div>
        <div className='p-nav'>
          <h3>About Me</h3>
        </div>
        <div className='p-nav'>
          <h3>Contact</h3>
        </div>
        <div className='p-nav'>
          <h3>Projects</h3>
        </div>
      </div>
      <div className='social'>
        <div className='s1'>
          <a href='https://github.com/warfunk' target='_blank'>
            <img src={ghl} alt='github symbol' className='gh' />
          </a>
        </div>
        <div className='s2'>
          <a
            href='https://www.linkedin.com/in/alexander-spencer-b7167419b/'
            target='_blank'
          >
            <img src={linkedin} alt='github symbol' className='li' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;

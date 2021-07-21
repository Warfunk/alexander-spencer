import './components.css';
import zion from './zion2.jpg';

const Intro = () => {
  return (
    <div className='page intro'>
      <img src={zion} className='prof-pic' alt='alex in zion' />
      <h1 className='title'>Alexander Warfield Spencer</h1>
      <div className='inner'>
        <h2 className='header'>
          Self taught software developer and snowboard afficianado.
        </h2>
      </div>
    </div>
  );
};

export default Intro;

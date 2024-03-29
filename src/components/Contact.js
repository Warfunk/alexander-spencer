import './components.css';

const Contact = () => {
  return (
    <div className='page'>
      <div className='title'>Contact</div>
      <div className='inner contact'>
        <h4>Williamsburg VA, 23185</h4>
        <h4>Cell: (757)-871-1541</h4>
        <h4>Email: spenceaw@gmail.com</h4>
        <h4>
          LinkedIn:{' '}
          <a
            rel='noopener'
            href='https://www.linkedin.com/in/alexander-s-b7167419b/'
            target='_blank'
          >
            https://www.linkedin.com/in/alexander-s-b7167419b/
          </a>
        </h4>
        <h4>
          Github:{'  '}
          <a rel='noopener' href='https://github.com/warfunk' target='_blank'>
            https://github.com/warfunk
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Contact;

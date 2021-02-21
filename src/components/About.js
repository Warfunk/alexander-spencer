import './components.css';
import az from './a-z.jpg';

const About = () => {
  return (
    <div className='page'>
      <div className='title'>About Me</div>
      <img src={az} className='prof-pic mtn' alt='alex on top of big sky' />
      <div className='inner about'>
        <p>
          My name is Alex Spencer. I was born and raised in Williamsburg, VA.
          Growing up, I was active in sports, individual and team, as well as in
          academics and music. In 2007, I began attending James Madison
          University. Four years later I left with a degree in Biology,
          concentration in Ecology and Environmental Science, and a minor in
          Geography. Shortly after graduation, I moved to Montana to enjoy the
          great Rocky Mountains and everything they have to offer. Working in
          the service industry, I was able to work hard in the evenings and take
          advantage of the amazing environment surrounding me during the day.
        </p>
        <p>
          In 2020, I decided it was time to pursue a different dream and find a
          more fulfilling career. I was not sure exactly what I wanted to do but
          knew the tech industry would be a good place to start my search. After
          thinking about a few ideas, learning some basic programming seemed
          like a great place to start. This is when I found freecodecamp.org and
          began to learn HTML and CSS. Once that course was finished, Python
          came next. While learning Python, more and more questions came up as
          to how everything was working. It became clear a computer science
          foundation would be greatly beneficial. Next came the Harvard CS50
          course. This course was absolutely amazing and really made me fall in
          love with the problem solving aspect of programming. After completing
          the course, JavaScript seemed like the right path, rather than
          returning to Python. I have been working hard to learn JavaScript and
          web development since finishing CS50 in September 2020. Today, I am a
          proficient web developer ready to pursue my new career and continue to
          learn about the never-ending world of programming!{' '}
        </p>
      </div>
    </div>
  );
};

export default About;

import './components.css';
import az from './a-z.jpg';

const About = () => {
  return (
    <div className='page'>
      <div className='title'>About Me</div>
      <img src={az} className='prof-pic mtn' alt='alex on top of big sky' />
      <p className='inner about'>
        My name is Alex Spencer. I was born into this beautiful world in 1988
        and raised in Williamsburg, VA. As a child I loved soccer, surfing,
        snowboarding, music. When I graduated from Jamestown High School in 2007
        I began college at James Madison University. Four years later I left
        with a degree in Biology, concentration in Ecology and Environmental
        Science, and a minor in Geography. Shortly after, I decided to live my
        dream of living in a ski town and moved to Big Sky, MT in 2012. For the
        next 8 years I snowboarded, hiked, and did everthing else I could to
        enjoy the great outdoors as much as possible. To make ends meet I worked
        in the service industry throughout this time, working at night and
        playing during the day. In 2020, I decided it was time to pursue a
        different dream and find a more fulfilling career. I was not sure
        exactly what I wanted to do but knew the tech industry would be a good
        place to start my search. After thinking about a few ideas, learning
        some basic programming seemed like a great place to start. This is when
        I found freecodecamp.org and began to learn HTML and CSS. Once that
        course was finished, Python came next. While learning Python, more and
        more questions came up as to how everthing was working. It became clear
        a computer science foundation would be greatly beneficial. Next came the
        free Harvard CS50 course. This course was absolutley amazing and really
        made me fall in love with problem solving aspect of programming. After
        completing the course, Javascript seemed like the right path, rather
        than returning to Python. I have been working hard to learn Javascript
        and web development since finishing CS50 in September 2020. Today, I am
        a profecient web developer ready to pursue my new career and continue to
        learn about the never ending world of programming!{' '}
      </p>
    </div>
  );
};

export default About;

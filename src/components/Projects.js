import './components.css';

const Projects = () => {
  return (
    <div className='page'>
      <h1 className='title'>Projects</h1>
      <div className='inner'>
        <h3 className='header'>Personal</h3>
        <ul className='list'>
          <li>
            Montana Ski Resorts-
            <span>
              <a
                target='_black'
                href='https://warfunk.github.io/mt-ski-resorts/'
                className='link'
              >
                warfunk.github.io/mt-ski-resorts/
              </a>
              <p>
                Resource that displays all of the Montana ski resorts. Allows
                users to compare key resort stats and 3 day forecast using the
                weatherapi.com. Users can register to save their specific user
                interface to login daily and look at forecasts.
              </p>
              <p>HTML, CSS, React, Node, Express, PostgreSQL, Tachyons</p>
            </span>
          </li>
          <li>
            Restaurant Site-
            <span>
              <a
                target='_black'
                href='https://warfunk.github.io/warfields-feast/'
                className='link'
              >
                warfunk.github.io/warfields-feast/
              </a>
            </span>
            <p>
              A simple restaurant website that dynamically displays menus and
              other resort information. Order page allows users to add items to
              cart.
            </p>
            <p>HTML, CSS, React</p>
          </li>
          <li>
            Calculator
            <span>
              <a
                target='_black'
                href='https://warfunk.github.io/calculator/'
                className='link'
              >
                warfunk.github.io/calculator/
              </a>
              <p>A simple functional calculator built using React.</p>
              <p>HTML, CSS, React</p>
            </span>
          </li>
        </ul>
        <h3 className='header'>Zero to Mastery Projects</h3>
        <ul className='list'>
          {/* <li>
            RoboFriends
            <span>
              <a
                target='_black'
                href='https://warfunk.github.io/robofriends/'
                className='link'
              >
                warfunk.github.io/robofriends/
              </a>
              <p>
                An app fetching 'robofriends' from a json api. Allows users to
                search through the list of robots for specific names.
              </p>
              <p>HTML, CSS, React</p>
            </span>
          </li> */}
          <li>
            Smart-brain
            <span>
              <a
                target='_black'
                href='https://warfunks-smart-brain.herokuapp.com'
                className='link'
              >
                warfunks-smart-brain.herokuapp.com
              </a>
            </span>
            <p>
              An app that uses to the Clarafai API to detect faces in a photo.
              Input a photo url to see the results.
            </p>
            <p>HTML, CSS, React, Node, Express, PostgreSQL, Tachyons</p>
          </li>
        </ul>
        <p>More projects on my Github page!</p>
      </div>
    </div>
  );
};

export default Projects;

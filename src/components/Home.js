import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <div>
          <p>
            <NavLink exact to={'/beers'}>
              All Beers
            </NavLink>
          </p>
        </div>
      </div>

      <div>
        <div>
          <p>
            <NavLink exact to={'/random-beer'}>
              Random Beer
            </NavLink>
          </p>
        </div>
      </div>

      <div>
        <div>
          <p>
            <NavLink exact to={'/new-beer'}>
              Add Beer
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    let service = axios.create({
      baseURL: `https://ih-beers-api2.herokuapp.com`,
    });
    service.get('/beers').then((res) => {
      console.log(res.data);
      this.setState({
        beers: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.beers.map((beer, index) => {
          return (
            <div key={index}>
              <div>
                <div>
                  <div>
                    <div>
                      <img src={beer.image_url} alt="..." />
                    </div>
                    <div>
                      <div>
                        <h5>
                          <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                        </h5>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        All Beers
      </div>
    );
  }
}

export default ListBeers;

import React from 'react';
import axios from 'axios';

class BeerDetails extends React.Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  componentDidMount() {
    let service = axios.create({
      baseURL: `https://ih-beers-api2.herokuapp.com`,
    });
    let id = this.props.match.params.id;
    service.get(`/beers/${id}`).then((res) => {
      console.log(res.data);
      this.setState({
        image: res.data.image_url,
        name: res.data.name,
        tagline: res.data.tagline,
        first_brewed: res.data.first_brewed,
        attenuation_level: res.data.attenuation_level,
        description: res.data.description,
        contributed_by: res.data.contributed_by,
      });
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.image} alt="..." />
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetails;

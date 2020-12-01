import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AddBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;

    if (type === 'number') {
      value = event.target.value.toString();
    }

    this.setState({
      [name]: value,
    });
  };

  OnFormSubmit = (event) => {
    event.preventDefault();
    let service = axios.create({
      baseURL: `https://ih-beers-api2.herokuapp.com`,
    });
    service.post('/beers/new', this.state).then((res) => {
      this.props.history.push('/beers');
    });
  };

  render() {
    return (
      <form onSubmit={this.OnFormSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Tagline: </label>
        <input
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label>First Brewed: </label>
        <input
          type="text"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />
        <label>Brewers Tips: </label>
        <input
          type="text"
          name="brewers_tips"
          value={this.state.brewers_tips}
          onChange={this.handleChange}
        />
        <label>Attenuation Level: </label>
        <input
          type="number"
          name="attenuation_level"
          value={this.state.attenuation_level}
          onChange={this.handleChange}
        />
        <label>Contributed by: </label>
        <input
          type="text"
          name="contributed_by"
          value={this.state.contributed_by}
          onChange={this.handleChange}
        />

        <button>Add</button>
      </form>
    );
  }
}

export default withRouter(AddBeer);
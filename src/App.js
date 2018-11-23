import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => this.setState({ errorMessage: err.message})
    )
  }

  render() {

    if(this.state.errorMessage && !this.state.lat) {
      return <div>Eror: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>
  }
}

export default App;

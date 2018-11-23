import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)

    this.state = { lat: null, errorMessage: '' };

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
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>
  }
}

export default App;

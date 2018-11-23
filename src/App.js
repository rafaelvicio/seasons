import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => console.log(err)
    )

  }

  render() {

    

    return (
      <div>
        Latitude: {this.state.lat}
      </div>
    );
  }
}

export default App;

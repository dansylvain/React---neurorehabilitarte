import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
class App extends Component {
 render() {

  const style = {
    height: '300px',
    display: 'inline-block'
}

 return (
 <div>
 <Map google={this.props.google} 
 zoom={12}
 initialCenter={{
 lat: 36.5053807,
 lng: -6.2717952}}

    style={style}
    />
 </div>
 
   );
 }
}
export default GoogleApiWrapper({
 apiKey: ('AIzaSyCH1a_9HzEYpCITSwgV4MN5Sgkn28jNz9Y')
})(App);
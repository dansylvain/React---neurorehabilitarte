import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
class App extends Component {
 render() {

  const style = {
    height: '400px',
    display: 'inline-block'
}

 return (
 <div>
  <Map 
  google={this.props.google} 
  zoom={12}
  initialCenter={{
  lat: 36.5221949,
  lng: -6.2852544}}
  style={style}
  >
  <Marker position={{ lat: 36.5341663, lng: -6.3028847}} />
  </Map>
 </div>
 
   );
 }
}
export default GoogleApiWrapper({
 apiKey: ('AIzaSyCH1a_9HzEYpCITSwgV4MN5Sgkn28jNz9Y')
})(App);
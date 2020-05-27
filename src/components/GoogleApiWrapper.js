import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
class App extends Component {
 render() {

  const style = {
    height: '300px',
    textAlign: 'center',
    position: 'relative',
    display: 'block',  }

 return (
 <div>
 <Map google={this.props.google} 

    style={style}
    />
 </div>
 
   );
 }
}
export default GoogleApiWrapper({
 apiKey: ('AIzaSyCH1a_9HzEYpCITSwgV4MN5Sgkn28jNz9Y')
})(App);
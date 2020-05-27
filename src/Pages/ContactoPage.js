import React, { Component, Fragment } from 'react';
import Contacto from '../components/Contacto';
import GoogleApiWrapper from '../components/GoogleApiWrapper'

class ContactoPage extends Component {

  render() {

    return (
      <Fragment>
        <GoogleApiWrapper />
        <Contacto />
      </Fragment>
      )

  }
}

export default ContactoPage;

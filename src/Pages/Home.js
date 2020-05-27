import React, { Component, Fragment } from 'react';
import Header from '../components/IndexHeader';
import Eventos from '../components/Eventos';
import Videos from '../components/Videos'
import IndexRecursos from '../components/IndexRecursos'
import IndexTrustBadges from '../components/IndexTrustBadges'

class Home extends Component {

  render() {

    return (
      <Fragment>
        <Header />
        <Eventos />
        <Videos />
        <IndexRecursos />
        <IndexTrustBadges />
      </Fragment>
      )

  }
}

export default Home;

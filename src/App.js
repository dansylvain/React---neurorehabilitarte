import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from './components/Layout';
// import Home from '';
import SobreMiTabs from './components/SobreMiTabs';
import SobreMiCurriculum from './components/SobreMiCurriculum';
import Eventos from './components/Eventos';
import Videos from './components/Videos';
import Recursos from './components/Recursos';
import ContactoPage from './Pages/ContactoPage';
import Home from './Pages/Home';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {

  render() {

    return (

    <BrowserRouter>
    <ScrollToTop />
      <Layout>
        <Switch>
          <Route path='/sobremi/curriculum'>
            <SobreMiTabs />
            <SobreMiCurriculum />
          </Route>
          <Route path='/sobremi/colaboraciones'>
            <SobreMiTabs />
            <ContactoPage />
          </Route>
          <Route path='/sobremi/'>
            <SobreMiTabs />
            <SobreMiCurriculum />
          </Route>
          <Route path='/eventos'>
            <Eventos />
          </Route>
          <Route path='/videos'>
            <Videos />
          </Route>
          <Route path='/recursos'>
            <Recursos />
          </Route>
          <Route path='/contacto'>
            <ContactoPage />
          </Route>
          <Route path='/:txt'>
            <Home />
          </Route>
          <Redirect from='/' to='/home' />
            <Home />
        </Switch>
      </Layout>
    </BrowserRouter>
)
  }
}

export default App;

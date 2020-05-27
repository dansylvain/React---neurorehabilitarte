import React, { Component, Fragment } from 'react';
import CommonNavbar from './CommonNavbar';
import CommonFooter from './CommonFooter';


class Layout extends Component {

  render() {

    return (
      <Fragment>
        <CommonNavbar />
          {this.props.children}
        <CommonFooter />
      </Fragment>

    )

  }
}

export default Layout;

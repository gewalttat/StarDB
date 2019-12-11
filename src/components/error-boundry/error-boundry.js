import React, { Component } from 'react';

import ErrorMarker from '../error-marker/error-marker';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorMarker />
    }

    return this.props.children;
  }
}

// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';


export default class About extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          You are signed out!
        </h1>
      </div>
    );
  }
}

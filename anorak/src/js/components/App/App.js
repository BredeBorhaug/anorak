import React, { Component } from 'react';
import Header from '.././Layout/Header';
import Footer from '.././Layout/Footer';
import SignIn from '.././Auth/SignIn';

export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignIn />
        <Footer />
      </div>
    );
  }
}
import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: '',
    auth : {
      token: ''
    }
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/cms/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleLogin = async e => {
    e.preventDefault()
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `anorak`,
        password: `anorak`
      })
      //      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    const auth = {...this.state.auth}
    auth.token = body
    this.setState( { auth} );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Anorak is ready to move to the next stage of dev.
          </p>
          <a
            className="App-link"
            href="https://github.com/BredeBorhaug/anorak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about Anorak
          </a>
        </header>
        <p>{this.state.response}</p>
        <p>
          <strong>Login to server:</strong>
        </p>
        <button type="button" onClick={this.handleLogin}>Login</button>
        <p>{this.state.auth.token}</p>
      </div>
    );
  }
}

export default App;
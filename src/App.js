import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { endpoint } from "@octokit/endpoint";

const requestOptions = endpoint("GET /repos/{owner}/{repo}/commits", {
  headers: {
    authorization: "token 524b2e08acd1cc789d7663507c5775872880de9b",
  },
  owner: "CPure",
  repo: "myrepoproject",
  type: "private",
});
const { url, options } = requestOptions;

class App extends Component {   
  componentDidMount() {
  
  console.log(requestOptions);
  fetch(url, options);
  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;

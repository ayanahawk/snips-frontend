import React from 'react';
import '../css/style.css';
import snipList from './snipList';
import SnipList from './snipList';
import SearchBar from './SearchBar'


function App() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="snippets.html">Snippets</a></li>
          <li><a href="account.html"> Account</a></li>
        </ul>
      </nav>

<SearchBar />
<SnipList/>

    </React.Fragment>
  );
}

export default App;

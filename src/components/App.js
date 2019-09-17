import React from 'react';
import '../css/style.css';
import SnipList from './SnipList';
import SearchBar from './SearchBar'
import axios from 'axios'
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      snippets: [],
    }
  }

  async componentDidMount() {
    console.log('App Mounted');
    // 1. request the data from our server
    const { data } = await axios.get('http://localhost:5000/api/snippets');
    // 2. hold that data in state so that it will be passed down to our Snips
    this.setState({
      snippets: data,
    });
  }


  getSnips= async snipData=>{
    console.log('App Mounted');
    // 1. request the data from our server
    const { data } = await axios.get('http://localhost:5000/api/snippets');
    // 2. hold that data in state so that it will be passed down to our Snips
    this.setState({
      snippets: data,
    });
  }

  createSnips= async snipData=>{
    await axios.post('http://localhost:5000/api/snippets', snipData)
    this.getSnips();
   
  }

  fetchSnippets = async searchText => {
    // fetch snippets from database
    const { data: snippets } = await axios.get(
      'http://localhost:5000/api/snippets'
    );

    const matchStr = (str, toMatch) =>
      str.toLowerCase().includes(toMatch.toLowerCase());
    // filter them
    const filteredSnips = snippets.filter(
      snippet =>
        matchStr(snippet.title || '', searchText) ||
        matchStr(snippet.description || '', searchText) ||
        matchStr(snippet.code || '', searchText) ||
        matchStr(snippet.language || '', searchText)
    );

    this.setState({
      snippets: filteredSnips,
    });
  }
  render() {
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
        <SearchBar onSearch={this.fetchSnippets} />
        <Form onCreate={this.createSnips}/>
        <SnipList snippets={this.state.snippets} />

      </React.Fragment>
    );
  }
}

export default App;

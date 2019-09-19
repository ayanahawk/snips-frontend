import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from '../SearchBar';
import SnipList from '../SnipList';
import Form from './Form';

export default class Snippets extends Component {
    static propTypes={};
    constructor(props){
        super(props); 
        this.state={
            snippets:[],
        };
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
    
      getSnips = async snipData => {
        console.log('App Mounted');
        // 1. request the data from our server
        const { data } = await axios.get('http://localhost:5000/api/snippets');
        // 2. hold that data in state so that it will be passed down to our Snips
        this.setState({
          snippets: data,
        });
      }
    
      createSnips = async snipData => {
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
        console.log( this.state.snippets);

        return (
           <React.Fragment>
                  <SnipList snippets={this.state.snippets} />
                  <SearchBar onSearch={this.fetchSnippets} />
                  <Form onCreate={this.createSnips} />

         </React.Fragment>
        )
    }
}

//request data from server
// set internal state
// render snips 

import React from 'react';
import Snip from './Snip';
import axios from 'axios';




export default class SnipList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snippet: [],
        }
    }

    async componentDidMount() {
        console.log('Snip mounting');
        const { data } = await axios.get('http://localhost:5000/api/snippets');

        this.setState({
            snippet: data,
        })
        console.log(data);
    }

    render() {
        return (
            <section id="snippets">
                {this.state.snippet.map(snippet => (<Snip key={snippet.id} snippet={snippet} />))}
            </section>)
    }

}
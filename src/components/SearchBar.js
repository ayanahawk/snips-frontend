import React from 'react'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
        };
    }

    handleChange= event=> {
        console.log(event);
        this.setState({
            searchText: event.target.value,
        });
    }

    render() {
        return (
            <form id="search">
                <label for="search-text">
                    <span class="icon">🔎</span>
                </label>
                <input type="text" name="search-text" id="search-text" value={this.state.searchText}
                    onChange={this.handleChange} />

                <button type="submit">Search</button>
            </form>
        )
    }
}
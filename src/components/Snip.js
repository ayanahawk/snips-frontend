import React from 'react';
import hljs from 'highlightjs';
import 'highlightjs/styles/ocean.css';
import PropTypes from 'prop-types';

export default class Snip extends React.Component {

  static propTypes={

    snippet:PropTypes.shape({
      title:PropTypes.string, 
      description:PropTypes.string, 
      language:PropTypes.string, 
      code: PropTypes.string
    })
  }

  constructor(props) {
    super(props);
    this.codeRef = React.createRef();
  }

  componentDidMount() {
    hljs.highlightBlock(this.codeRef.current)
  }

  render() {
    const { title, description, language, code } = this.props.snippet

    return (
      <div className="snip">

        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{language}</p>

        </div>
        <code ref={this.codeRef} className={language}>{code}</code>
      </div>
    )
  }
}
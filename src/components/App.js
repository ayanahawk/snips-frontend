import React from 'react';
import '../css/style.css';
import Form from './pages/Form';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Header from "./Header";
import Pages from './pages/index'
import fourOhfour from './fourOhfour'


class App extends React.Component {

  render() {
    return (
      <Router>
       <Header/>
    
       <Switch>
        <Route path='/' exact component={Pages.Home} />
        <Route path='/snippets' exact component={Pages.Snippets}/>
        <Route path='/account' exact component={Pages.Account}/>
        <Route path='/about' exact component={Pages.About}/>
        <Route component={fourOhfour}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

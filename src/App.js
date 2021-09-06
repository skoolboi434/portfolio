import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Components */
import Navigation from './components/Blocks/Navigation/Nav';

/* Views */
import Home from './components/Views/Home/Home';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

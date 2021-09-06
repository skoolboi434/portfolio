import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Views */
import Home from './components/Views/Home/Home';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
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

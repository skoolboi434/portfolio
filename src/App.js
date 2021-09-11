import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Blocks/Footer/Footer';

/* Components */
import Navigation from './components/Blocks/Navigation/Nav';

/* Views */
import Home from './components/Views/Home/Home';
import ProjectDetails from './components/Views/ProjectDetails/ProjectDetails';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/project-details/:id' component={ProjectDetails} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

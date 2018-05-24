import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import Root from '../Root';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Route path="/" component={Root} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

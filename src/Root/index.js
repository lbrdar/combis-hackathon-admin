import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import {
  AppBar
} from 'material-ui';
import { Breadcrumb, Drawer } from '../common';
import { DonorsList, MessagesList, QuestionnairesList } from "../screens";

const styles = {
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
    paddingTop: 80,
    height: 'calc(100vh - 95px)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  }
};

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.mql = window.matchMedia('(min-width: 800px)');

    this.state = {
      drawerOpen: this.mql.matches,
      drawerDocked: this.mql.matches
    };
  }

  componentWillMount = () => {
    this.mql.addListener(this.handleMediaQueryChange);
  };

  componentWillUnmount = () => {
    this.mql.removeListener(this.handleMediaQueryChange);
  };

  handleMediaQueryChange = () => {
    this.setState({ drawerDocked: this.mql.matches });
  };

  handleDrawerOpen = () => {
    this.setState((prevState) => ({ drawerOpen: !prevState.drawerOpen }));
  };

  handleRouteChange = (event, value) => {
    this.props.history.push(value);
  };


  render() {
    const calculatedStyle = {
      paddingLeft: this.state.drawerDocked && this.state.drawerOpen ? 275 : 14,
    };

    return (
      <div style={{ backgroundColor: "#e5e5e5"}}>
        <AppBar
          position="static"
          title={<Breadcrumb routes={this.props.location.pathname.split('/')} routeParams={this.props.params} />}
          style={calculatedStyle}
          open={this.state.drawerOpen}
          onClick={this.handleDrawerOpen}
        />
        <Drawer
          open={this.state.drawerOpen}
          docked={this.state.drawerDocked}
          location={this.props.location.pathname}
          onRequestChange={this.handleDrawerOpen}
          onRequestChangeList={this.handleRouteChange}
        />
        <div style={{ ...styles.contentContainer, ...calculatedStyle }}>
          <Switch>
            <Route exact path="/donors" component={DonorsList} />
            <Route exact path="/messages" component={MessagesList} />
            <Route exact path="/questionnaires" component={QuestionnairesList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Root);

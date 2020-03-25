import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import routes from './routes';

import './index.less';

const pkg = require('../package.json');
console.log(pkg);

class Index extends Component {
    state = {
        name: 'Serral',
    }

    onClick = () => {
        const { name } = this.state;
        console.info(name);
    }

    render() {
        const {
            name,
        } = this.state;
        return (
          <div className="main">
            <div className="icon" />
            <Router basename={pkg.name}>
              <div>
                <Link to="/page2/">/page1/{name}</Link>
                <Switch>
                  {routes.map(route => (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      component={route.component}
                    />
))}
                  <Route render={() => <div>No thing was found</div>} />
                </Switch>
              </div>
            </Router>
          </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));

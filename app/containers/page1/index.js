import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './page1.less';

class P1 extends Component {
    c = () => {
        const { history } = this.props;
        history.push("/page3");
    }

    render () {
        const { location } = this.props;
        return (
          <div className="my-fc">
            Congratulations to {location.id || 'page1'}
            <button type="button" onClick={this.c}>kk</button>
          </div>
);
    }
}

export default withRouter(P1);

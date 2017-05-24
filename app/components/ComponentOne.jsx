import React from 'react';

var ComponentOne = React.createClass({
  getInitialState: function () {
    return {
      count: 4
    };
  },
  render: function () {
    return (
      <div>
        <h3>Component One Using React.createClass</h3>
        <p>Current count: {this.state.count}</p>
      </div>
    );
  }
});

export default ComponentOne;

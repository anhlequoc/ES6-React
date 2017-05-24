import React from 'react';

class ComponentTwo extends React.Component {
  //để getInitialState, cần overwrite constructor theo cách viết này
  constructor (props) {
    super(props);

    //getInitialState
    this.state = {
      count: 9
    };
  }
  render () {
    return (
      <div>
        <h3>Component Two Using React.Component</h3>
        <p>Current Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ComponentTwo;

import React from 'react';

// var isAdmin = true;
// var adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render() {
//       if (isAdmin) {
//         return (
//           <div className="callout secondary">
//             <p className="alert label">Private Admin Information</p>
//             <Component {...this.props}/>
//           </div>
//         );
//       } else {
//         return null;
//       }
//     }
//   };
// };

var isAdmin = true;
var adminComponent = (Component) => {
  return class Admin extends Component { //extends thế này có nhiều lợi ích hơn, có thể track được componentDidUpdate
    componentDidUpdate () {
      console.log('Admin component did update');
      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }
    render() {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private Admin Information</p>
            {super.render()};
          </div>
        );
      } else {
        return null;
      }
    }
  };
};

class ComponentTwo extends React.Component {
  componentDidUpdate () {
    console.log('ComponentTwo did update');
  }

  //để getInitialState, cần overwrite constructor theo cách viết này
  constructor (props) {
    super(props);

    //getInitialState
    this.state = {
      count: props.count
    };

    this.onClick = this.onClick.bind(this);//recommend bind hàm này trong constructor function vì thế chỉ cần bind 1 lần, không cần bind nhiều lần mỗi khi render
  }
  onClick () {
    this.setState({ //dung this sẽ gây ra uncaught type error ... do this không refer đến component này
      count: this.state.count + 1
    });
  }
  render () {
    return (
      <div>
        <h3>Component Two Using React.Component</h3>
        <p>Current Count: {this.state.count}</p>
        <button className="button" onClick={this.onClick}>Button Two</button>
      </div>
    );
  }
}

//set default props
ComponentTwo.defaultProps = {
  count: 50
};

//set prop types
ComponentTwo.propTypes = {
  count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);

import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [1, 2, 3, 4, 5]
      message: null
    };
  }

  componentDidMount() {
    // const constant = 1;
    // constant = 2;
  }

  saySomething(event) {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>List</h2>
        <ul>
          {/* {this.state.data.map(num => <li>{num}</li>)} */}
        </ul>
        <input
          type="text"
          onChange={this.saySomething}
          value={this.state.message}
        />
      </div>
    );
  }
}

export default List;

import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <button onClick={this.props.deleteHandler}>X</button>
      </div>
    );
  }
}

export default Post;

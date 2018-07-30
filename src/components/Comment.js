import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div>
        {this.props.text}
        <button onClick={this.props.deleteComment}>Delete Comment</button>
      </div>
    );
  }
}

export default Comment;

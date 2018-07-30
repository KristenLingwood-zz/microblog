import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Post.css';
import Comment from './Comment';

class Post extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
    body: this.props.body,
    editing: false,
    content: ''
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  toggleEdit = evt => {
    this.setState({ ...this.state, editing: !this.state.editing });
  };

  handleComment = evt => {
    evt.preventDefault();
    this.props.dispatch({
      type: 'ADD_COMMENT',
      id: this.state.id,
      content: this.state.content
    });
    this.setState({ content: '' });
  };

  handleEdit = evt => {
    evt.preventDefault();

    this.props.dispatch({
      type: 'UPDATE_POST',
      id: this.state.id,
      title: this.state.title,
      body: this.state.body
    });
    this.setState({ ...this.state, editing: !this.state.editing });
  };

  render() {
    // console.log('rendering post');
    // let comments = this.props.post.comments.map(c => (
    //   <Comment content={c.content} />
    // ));
    let post;
    if (!this.state.editing) {
      post = (
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
          <button onClick={this.toggleEdit}>Edit</button>
          <button
            className="btn-sm btn-outline-primary"
            onClick={this.props.deleteHandler}
          >
            Delete
          </button>
          <form onSubmit={this.handleComment}>
            <input
              type="text"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
            />
            <button>Add Comment</button>
          </form>
          {/* {comments} */}
        </div>
      );
    } else {
      post = (
        <div>
          <form onSubmit={this.handleEdit}>
            <label id="Post-label" htmlFor="title">
              Title:
            </label>
            <input
              className="form-control"
              type="text"
              id="Post-edit-title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />
            <label id="Post-label" htmlFor="body">
              Body:
            </label>
            <textarea
              className="form-control"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              id="Post-edit-body"
              cols="30"
              rows="5"
            />
            <button>Update</button>
          </form>
        </div>
      );
    }

    return <div>{post}</div>;
  }
}

const mapStateToProps = function(state) {
  return {
    posts: state.posts
  };
};

export default connect()(Post);

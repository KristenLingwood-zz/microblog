import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Post.css';

class Post extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
    body: this.props.body,
    editing: false
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  toggleEdit = evt => {
    this.setState({ ...this.state, editing: !this.state.editing });
  };

  handleEdit = (evt, id, title, body) => {
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

export default connect()(Post);

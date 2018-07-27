import React, { Component } from 'react';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';

class NewPostForm extends Component {
  state = {
    title: '',
    body: ''
  };
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.title.length < 1 || this.state.body.length < 1) {
      alert('Post must have a title and a body');
    } else {
      this.props.dispatch({
        type: 'ADD_POST',
        title: this.state.title,
        body: this.state.body
      });
      this.setState({ title: '', body: '' });
    }
  };

  render() {
    return (
      <div>
        <form id="Post-form" onSubmit={this.handleSubmit}>
          <label id="Post-label" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="Post-title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label id="Post-label" htmlFor="body">
            Body:
          </label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            id="Post-body"
            cols="30"
            rows="5"
          />
          <br />
          <button id="Post-button">Publish</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewPostForm);

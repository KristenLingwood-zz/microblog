import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';

class PostList extends Component {
  handleDelete = id => {
    this.props.dispatch({ type: 'DELETE_POST', id });
  };

  render() {
    const posts = this.props.posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        deleteHandler={() => this.handleDelete(post.id)}
      />
    ));
    return (
      <div id="Post-list">
        {posts}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostList);

import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actionCreators';

class PostList extends Component {
  handleDelete = id => {
    this.props.deletePost(id);
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        comments={post.comments}
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

export default connect(
  mapStateToProps,
  { fetchPosts, deletePost }
)(PostList);

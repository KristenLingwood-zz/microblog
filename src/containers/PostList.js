import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    const posts = this.props.posts.map(post => (
      <Post key={post.id} title={post.title} body={post.body} />
    ));
    return (
      <div>
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

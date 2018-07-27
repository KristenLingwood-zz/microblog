import React, { Component } from 'react';
import { connect } from 'react-redux';

class TitleList extends Component {
  render() {
    const titles = this.props.posts.map(p => <li key={p.id}>{p.title}</li>);
    return (
      <div id="Title-list">
        <h2>Titles</h2>
        <ul>{titles}</ul>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(TitleList);

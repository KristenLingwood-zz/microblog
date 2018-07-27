import React, { Component } from 'react';
import PostList from '../containers/PostList';
import NewPostForm from '../containers/NewPostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
        <NewPostForm />
      </div>
    );
  }
}

export default App;

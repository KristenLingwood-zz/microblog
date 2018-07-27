import React, { Component } from 'react';
import PostList from '../containers/PostList';
import NewPostForm from '../containers/NewPostForm';
import TitleList from '../containers/TitleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleList />
        <PostList />
        <NewPostForm />
      </div>
    );
  }
}

export default App;

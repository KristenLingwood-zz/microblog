import React, { Component } from 'react';
import PostList from '../containers/PostList';
import NewPostForm from '../containers/NewPostForm';
import TitleList from '../containers/TitleList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="Title-col">
          <TitleList />
          <NewPostForm />
        </div>
        <div id="Post-col">
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;

import axios from 'axios';

export function fetchPosts() {
  return async function(dispatch) {
    const response = await axios.get('http://localhost:3000/api/posts');
    const posts = response.data;
    return dispatch({
      type: 'FETCH_POSTS',
      posts
    });
  };
}

export function addPost(state) {
  return async function(dispatch) {
    const response = await axios.post('http://localhost:3000/api/posts', {
      title: state.title,
      body: state.body
    });
    return dispatch({
      type: 'ADD_POST',
      id: response.data.id,
      title: state.title,
      body: state.body
    });
  };
}

export function deletePost(id) {
  return async function(dispatch) {
    await axios.delete(`http://localhost:3000/api/posts/${id}`);
    return dispatch({
      type: 'DELETE_POST',
      id
    });
  };
}

export function editPost(id, title, body) {
  return async function(dispatch) {
    await axios.patch(`http://localhost:3000/api/posts/${id}`, { title, body });
    return dispatch({
      type: 'UPDATE_POST',
      id,
      title,
      body
    });
  };
}

export function fetchComments(post_id) {
  return async function(dispatch) {
    const response = await axios.get(
      `http://localhost:3000/api/posts/${post_id}/comments`
    );
    const comments = response.data;
    return dispatch({ type: 'FETCH_COMMENTS', post_id, comments });
  };
}

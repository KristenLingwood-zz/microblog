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

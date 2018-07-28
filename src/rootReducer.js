import uuid from 'uuid/v1';

const INITIAL_STATE = {
  posts: []
};

function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [
        ...state.posts,
        { id: uuid(), title: action.title, body: action.body }
      ]
    };
  }
  if (action.type === 'DELETE_POST') {
    return { ...state, posts: state.posts.filter(p => p.id !== action.id) };
  }
  if (action.type === 'UPDATE_POST') {
    return {
      ...state,
      posts: state.posts.map(p => {
        if (p.id === action.id) {
          p.id = action.id;
          p.title = action.title;
          p.body = action.body;
          return p;
        }
        return p;
      })
    };
  }
  return { ...state };
}

export default rootReducer;

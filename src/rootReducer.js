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
  return { ...state };
}

export default rootReducer;

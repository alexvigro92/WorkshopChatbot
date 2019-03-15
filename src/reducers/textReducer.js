import {
ADD_NEW_QUESTION,
MAKE_A_QUESTION
} from '../constants';

const textReducer = (state = {
  navBarTitle: "Chatbot Watson Assistant Workshop",
  FooterBarTitle: "React and Redux",
  conversation: [],
  context: {}
}, action) => {
  switch (action.type) {
    case ADD_NEW_QUESTION:
    state = {
      ...state,
      conversation: [...state.conversation,action.payload],
      context: action.payload.context
    }
      break;
    case MAKE_A_QUESTION:
    state = {
      ...state,
      conversation: [...state.conversation,action.payload.payload],
      context: action.payload.context
    }
      break;
    default:
      return state;
  }
  return state;
}

export default textReducer;

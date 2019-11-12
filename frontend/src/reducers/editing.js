 import { EDITING_STATE } from '../actions/actionCreators.js'

const initialState = false;

export default function editing(state = initialState, action) {  
  //console.log(action)
  switch (action.type) {
    case EDITING_STATE:            
      return action.ed; 
      default:
      return state;  
  }
}

import nanoid from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from '../actions/actionCreators.js';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
     case EDIT_SERVICE:
      let newState = [];
      state.map(o=>o.id !== action.payload.id? newState.push(o):newState.push({id: action.payload.id, name: action.payload.name, price: action.payload.value,}))
      return newState;
       
    default:

      return state;
  }
}

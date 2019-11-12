
export const ADD_SERVICE = 'ADD_SERVICE';
export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export const REMOVE_SERVICE = 'REMOVE_SERVICE';
export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD';
export function changeServiceField(name, value) {  
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export const EDIT_SERVICE = 'EDIT_SERVICE';
export function editService(id, name, value) {  
  return {type: EDIT_SERVICE, payload: {id, name, value}}
}

export const EDITING_STATE = 'EDITING';
export function editing(ed) {  
  return {type: EDITING_STATE, ed: ed}
} 

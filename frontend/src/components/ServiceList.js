import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, changeServiceField, editing } from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = id => {
    const index = items.findIndex(item => item.id === id);
    dispatch(changeServiceField('name', items[index].name));
    dispatch(changeServiceField('price', items[index].price));
    dispatch(changeServiceField('id', items[index].id));
    dispatch(editing(true));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>&#9998;</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, editing, editService } from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const editingState = useSelector(state => state.editingState);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const { name, value } = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(addService(item.name, item.price));
	}

	const handleCancel = evt => {
		evt.preventDefault();
		dispatch(changeServiceField('name', ''));
		dispatch(changeServiceField('price', ''));
		dispatch(editing(false));
	}

	const handleEditing = evt => {
		evt.preventDefault();
		dispatch(editService(item.id, item.name, item.price));
		dispatch(editing(false));
		dispatch(changeServiceField('name', ''));
		dispatch(changeServiceField('price', ''));
	}

	return (
		<form onSubmit={editingState ? handleEditing : handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			{editingState ? <button type='button' onClick={handleCancel}>Cancel</button> : null}
		</form>
	);
}

export default ServiceAdd;

import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App () {
	const [ name, setName ] = useState('');
	const [ list, setList ] = useState([]);
	const [ isEditing, setIsEditing ] = useState(false);
	const [ editId, setEditId ] = useState(null);
	const [ alert, setAlert ] = useState({ show: false, msg: '', type: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, 'danger', 'please enter a value');
		} else if (name && isEditing) {
			// deal with edit.
		} else {
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([ ...list, newItem ]);
			setName('');
			showAlert(true, 'success', `${newItem.title} added to the list`);
		}
	};

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const clearList = () => {
		showAlert(true, 'danger', 'empty list');
		setList([]);
	};

	const removeItem = (id) => {
		showAlert(true, 'danger', `${list.find((item) => item.id === id).title} removed`);
		setList(list.filter((item) => item.id !== id));
	};

	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} />}
				<h3>grocery bud</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="e.g. eggs"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className="grocery-container">
					<List items={list} removeItem={removeItem} />
					<button onClick={clearList} className="clear-btn">
						Clear Items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;

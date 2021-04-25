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
		console.log('submitted');
	};
	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert />}
			</form>
			<div className="grocery-container">
				<List />
				<button className="clear-btn">Clear Items</button>
			</div>
		</section>
	);
}

export default App;
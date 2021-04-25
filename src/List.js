import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, removeItem }) => {
	return (
		<div className="grocery-list">
			{items.map((item) => {
				return (
					<article className="grocery-item" key={item.id}>
						<p className="title">{item.title}</p>
						<div className="btn-container">
							<button type="button" className="edit-btn">
								<FaEdit />
							</button>
							<button onClick={() => removeItem(item.id)} type="button" className="delete-btn">
								<FaTrash />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default List;

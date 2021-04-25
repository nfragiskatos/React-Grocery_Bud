import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items }) => {
	return (
		<article>
			{items.map((item) => {
				return <h2 key={item.id}>{item.title}</h2>;
			})}
		</article>
	);
};

export default List;

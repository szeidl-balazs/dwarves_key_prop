import React from 'react';


const ListItem = (props) => {

	return (
		<div>			
			<ul>
				<li>{props.name}</li>
			</ul>
		</div>
	);
}

export default ListItem;


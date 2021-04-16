import React from 'react';
import ListItem from './ListItem'

const List = () => {

	const dwarves = [
    {
        name: 'Sleepy',
        id: 'shewlx',
    },
    {
        name: 'Grumpy',
        id: 'wrmxls',
    },
    {
        name: 'Gimli',
        id: 'qlsayk',
    },
    {
        name: 'Bruenor',
        id: 'prfckj',
    },
]

	return (
		<div>
			<h1>Hello! Here’s a list of some dwarves:</h1>
			{dwarves.map(dwarf => <ListItem key={dwarf.id} name={dwarf.name}/>)}
		</div>
	);
}

export default List;
import React from 'react';

const myItems = [
    { id: 1, name: 'Apple'},
    { id: 2, name: 'Banana'},
    { id: 3, name: 'Cherry'}
];

function CombinatedList() {
    return (
        <>
            <h2>My Fruit List</h2>
            <ul>
                {myItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <p>Total: {myItems.length} items</p>
        </>
    );
}

export default CombinatedList;
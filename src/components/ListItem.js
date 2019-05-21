import React from 'react';

function ListItem({text, completed}) {
    return (
        <li>
            {text}
            {completed ? '*' : ' '}
        </li>
    );
}

export default ListItem;

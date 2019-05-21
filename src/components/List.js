import React from 'react';

import ListItem from './ListItem';

function List({todos}) {
    return (
        <ul>
            {todos.map(todo => <ListItem key={todo.id} {...todo} />)}
        </ul>
    );
}

export default List;

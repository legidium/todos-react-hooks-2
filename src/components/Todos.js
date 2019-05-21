import React from 'react';

import Header from './Header';
import Input from './Input';
import List from './List';
import Filter from './Filter';

function Todos({
    todos,
    filter,
    filteredTodos,
    completedTodos,
    handleAddTodo,
    handleSelectFilter,
    handleClearCompleted
}) {
    const count = todos.length;
    const countCompleted = completedTodos.length;

    return (
        <div className="todos">
            <Header />
            <Input onSubmit={handleAddTodo} />
            <List todos={filteredTodos} />
            <Filter
                filter={filter}
                count={count}
                countCompleted={countCompleted}
                onSelectFilter={handleSelectFilter}
                onClearCompleted={handleClearCompleted}
            />
        </div>
    );
}

export default Todos;

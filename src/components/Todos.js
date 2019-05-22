import React from 'react';

import Header from './Header';
import Input from './Input';
import List from './List';
import Filter from './Filter';

function Todos({
    todos,
    count,
    completedCount,
    filter,
    addTodo,
    setFilter,
    clearCompletedTodos
}) {
    return (
        <div className="todos">
            <Header />
            <Input onSubmit={addTodo} />
            <List todos={todos} />
            <Filter
                filter={filter}
                count={count}
                countCompleted={completedCount}
                onSelectFilter={setFilter}
                onClearCompleted={clearCompletedTodos}
            />
        </div>
    );
}

export default Todos;

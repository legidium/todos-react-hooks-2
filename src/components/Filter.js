import React, {useState} from 'react';

const activeClass = 'selected';

const noop = () => {};

const filters = [
    {title: 'All', value: 'ALL'},
    {title: 'Active', value: 'ACTIVE'},
    {title: 'Completed', value: 'COMPLETED'},
];

function Filter({
    filter = 'ALL',
    count = 0,
    countCompleted = 0,
    onClearCompleted = noop,
    onSelectFilter = noop
}) {
    return (
        <footer className="footer">
            <div className="todo-count">
                <strong>{count}</strong>
                <span> items left</span>
            </div>
            <ul className="filters">
                {filters.map(({title, value}) => (
                    <li key={value}>
                        <span
                            className={filter === value ? activeClass : {}}
                            onClick={() => onSelectFilter(value)}
                        >
                        {title}
                    </span>
                    </li>
                ))}
            </ul>
            {countCompleted > 0 && (
                <button className="clear-completed" onClick={onClearCompleted}>
                    Clear completed
                </button>
            )}
        </footer>
    );
}

export default Filter;

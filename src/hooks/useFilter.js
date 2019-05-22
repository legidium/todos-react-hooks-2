import {useState, useMemo} from 'react';

function useFilter({todos, ...params}) {
    const [filter, setFilter] = useState('ALL');

    const filteredTodos = useMemo(
        () => todos.filter(({completed}) => (
            filter === 'COMPLETED' ? completed : (filter === 'ACTIVE' ? !completed : true)
        )),
        [todos, filter]
    );
    return {
        ...params,
        filter,
        setFilter,
        todos: filteredTodos
    };
}

export default useFilter;

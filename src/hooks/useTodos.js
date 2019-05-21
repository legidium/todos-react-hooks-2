import {useReducer, useState, useCallback, useMemo} from 'react';


export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        todo: {
            id: Date.now(),
            text: text,
            completed: false
        }
    };
}

export function removeTodo(id) {
    return {
        type: 'REMOVE_TODO',
        id: id
    };
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
}

export function clearCompleted() {
    return {
        type: 'CLEAR_COMPLETED'
    };
}

function reducer(todos, action) {
    const {type} = action;

    switch (type) {
        case 'ADD_TODO':
            return [...todos, action.todo];

        case 'REMOVE_TODO':
            return todos.filter((todo) => todo.id !== action.id);

        case 'CLEAR_COMPLETED':
            return todos.filter((todo) => !todo.completed);

        default:
            throw Error(`Unknown action type ${type}`);
    }
}

function useTodos(initialTodos = []) {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const [filter, setFilter] = useState('ALL');

    const filteredTodos = useMemo(
        () => todos.filter(({completed}) => {
            if (filter === 'COMPLETED') return completed;
            if (filter === 'ACTIVE') return !completed;
            return true;
        }),
        [todos, filter]
    );

    const completedTodos = useMemo(
        () => todos.filter(({completed}) => completed),
        [todos]
    );

    const handleAddTodo = useCallback(
        (text) => dispatch(addTodo(text)),
        []
    );

    const handleClearCompleted = useCallback(
        () => dispatch(clearCompleted()),
        []
    );

    const handleSelectFilter = useCallback(
        (filter) => setFilter(filter),
        []
    );

    return {
        todos,
        filteredTodos,
        completedTodos,
        filter,
        dispatch,
        setFilter,
        handleAddTodo,
        handleSelectFilter,
        handleClearCompleted
    };
}

export default useTodos;

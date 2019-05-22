import {useReducer, useMemo, useCallback} from 'react';

export function add(text) {
    return {
        type: 'ADD_TODO',
        todo: {
            id: Date.now(),
            text: text,
            completed: true
        }
    };
}

export function remove(id) {
    return {
        type: 'REMOVE_TODO',
        id: id
    };
}

export function toggle(id) {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
}

export function clear(status) {
    return {
        type: 'CLEAR_TODOS',
        status,
    };
}

function reducer(todos, action) {
    const {type} = action;

    switch (type) {
        case 'ADD_TODO':
            return [...todos, action.todo];

        case 'REMOVE_TODO':
            return todos.filter((todo) => todo.id !== action.id);

        case 'CLEAR_TODOS':
            const {status} = action;
            if (status === 'COMPLETED' || status === 'ACTIVE') {
                return todos.filter(({completed}) => status === 'COMPLETED' ? !completed : completed);
            }
            return [];

        default:
            throw new Error(`Unknown action type ${type}`);
    }
}

function useTodos(initialTodos = []) {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const completedTodos = useMemo(
        () => todos.filter(({completed}) => completed),
        [todos]
    );

    const addTodo = useCallback(
        (text) => dispatch(add(text)),
        []
    );

    const clearTodos = useCallback(
        (status) => dispatch(clear(status)),
        []
    );

    const clearCompletedTodos = useCallback(
        () => dispatch(clear('COMPLETED')),
        []
    );

    return {
        todos,
        dispatch,
        addTodo,
        clearTodos,
        clearCompletedTodos,
        count: todos.length,
        completedCount: 10, // completedTodos.length
    };
}

export default useTodos;

import { useReducer, useMemo } from "react";

export default function useTodos(initialTodos) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const actions = useMemo(
    () => ({
      add: todo => dispatch({ type: "ADD_TODO", todo }),
      remove: id => dispatch({ type: "REMOVE_TODO", id }),
      toggle: id => dispatch({ type: "TOGGLE_TODO", id }),
      clear: () => dispatch({ type: "CLEAR_TODO" })
    }),
    []
  );

  return [todos, actions];
}

function reducer(state, action) {
  const { type } = action;

  if (type === "ADD_TODO") {
    return [...state, action.todo];
  }

  if (type === "REMOVE_TODO") {
    const todos = state.filter(({ id }) => id !== action.id);
    return todos.length !== state.length ? todos : state;
  }

  return state;
}

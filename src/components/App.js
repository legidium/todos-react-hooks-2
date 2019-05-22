import React from 'react';

import Todos from './Todos';
import useTodos from '../hooks/useTodos';
import useFilter from '../hooks/useFilter';

function App() {
    const todos = useTodos();
    const filter = useFilter(todos);

    return (
        <div className="app">
            <Todos
                {...todos}
                {...filter}
            />
        </div>
    );
}

export default App;

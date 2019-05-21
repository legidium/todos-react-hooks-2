import React from 'react';

import Todos from './Todos';
import useTodos from '../hooks/useTodos';

function App() {
    const todos = useTodos();

    return (
        <div className="app">
            <Todos {...todos} />
        </div>
    );
}

export default App;

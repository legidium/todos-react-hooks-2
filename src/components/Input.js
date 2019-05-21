import React, {useState} from 'react';

const ENTER_KEY = 13;

function Input({onSubmit}) {
    const [text, setText] = useState('');
    return (
        <input
            name="text"
            value={text}
            onChange={({target: {value}}) => setText(value)}
            onKeyDown={(event) => {
                if (event.keyCode === ENTER_KEY) {
                    event.preventDefault();
                    onSubmit(text);
                    setText('');
                }
            }}
        />
    );
}

export default Input;

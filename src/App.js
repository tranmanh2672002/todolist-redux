import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction } from '~/redux/actions';
import { todoListSelector } from './redux/selectors';
import { v4 } from 'uuid';

function App() {
    const [input, setInput] = useState('');
    const RefInput = useRef();

    const dispatch = useDispatch();

    const todoList = useSelector(todoListSelector);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleClickAdd = () => {
        dispatch(
            addTodoAction({
                id: v4(),
                name: input,
            }),
        );
        setInput('');
        RefInput.current.focus();
    };

    return (
        <div className="App">
            <input value={input} ref={RefInput} placeholder="todo" onChange={handleInputChange} />

            <button onClick={handleClickAdd}>add</button>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

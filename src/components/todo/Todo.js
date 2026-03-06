import { useCallback, useState} from "react";

import TodoItem from "./TodoItem";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = event => {
        const { value } = event.target;
        setInput(value);
    }

    const handleAddTodo = () => {
        if (!input.trim()) return;
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Date.now(), text: input, isCompleted: false },
        ]);
        setInput("");
    }

    const toggleTodo = useCallback((id) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ?
            { ...todo, isCompleted: !todo.isCompleted } : todo )
        );
    }, []);

    const deleteTodo = useCallback(id => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);

    console.log('todos...', todos);

    return (
        <div>
            <h2>Todo App</h2>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
                <input id="text" value={input} onChange={handleChange}/>
                <button onClick={handleAddTodo}>Add</button>
            </div>
            {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggle={toggleTodo}/>
                )
            })}
        </div>
    )
};

export  default TodoApp;
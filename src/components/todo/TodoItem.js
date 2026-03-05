import { memo} from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
    console.log('TodoItem rendering');
    const { id, text, isCompleted } = todo;

    const handleCheck = () => onToggle(id);

    const handleDeleteTodo = () => onDelete(id)

    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
            <input type="checkbox" checked={isCompleted} onChange={handleCheck}/>
            <span style={{ textDecoration: isCompleted ? "line-through": ""}}>{text}</span>
            <button onClick={handleDeleteTodo}>Delete</button>
        </div>
    )
};

export default memo(TodoItem);
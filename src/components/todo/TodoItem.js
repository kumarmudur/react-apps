import { memo, useCallback } from "react";

const styles = {
    container: {
        display: "flex",
        gap: "10px",
        marginBottom: "8px",
        alignItems: "center",
    },
    completed: {
        textDecoration: "line-through",
        opacity: 0.9
    }
}

const TodoItem = ({ todo, onDelete, onToggle }) => {
    const { id, text, isCompleted } = todo;

    const handleToggle = useCallback(() => onToggle(id), [id, onToggle]);
    const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

    return (
        <div style={styles.container}>
            <input type="checkbox" checked={isCompleted} onChange={handleToggle}/>
            <span style={isCompleted ? styles.completed : undefined }>{text}</span>
            <button onClick={handleDelete} aria-label={`Delete ${text}`}>Delete</button>
        </div>
    )
};

export default memo(TodoItem);
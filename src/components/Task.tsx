import { Trash } from "phosphor-react";
import { ChangeEvent, memo } from "react";
import styles from "./Task.module.scss";

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}
interface TaskProps {
  task: Task;
  onToggleIsCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

function TaskComponent({ task, onToggleIsCompleted, onDeleteTask }: TaskProps) {
  function handleToggleIsCompleted(id: string) {
    onToggleIsCompleted(id);
  }

  function handleDeleteTask(id: string) {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkboxControl}>
        <input
          id={`checkbox-${task.id}`}
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => handleToggleIsCompleted(task.id)}
        />
        <label htmlFor={`checkbox-${task.id}`} />
      </div>
      <p>{task.description}</p>
      <button onClick={() => handleDeleteTask(task.id)}>
        <Trash size={14} weight="bold" />
      </button>
    </div>
  );
}

export const Task = memo(TaskComponent, (prevProps, nextProps) =>
  Object.is(prevProps.task, nextProps.task)
);

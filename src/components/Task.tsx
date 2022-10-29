import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";

interface TaskProps {
  description: string;
  id: string;
}

export function Task({ id, description }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.checkboxControl}>
        <input id={`checkbox-${id}`} type="checkbox" />
        <label htmlFor={`checkbox-${id}`} />
      </div>
      <p>{description}</p>
      <button>
        <Trash size={14} weight="bold" />
      </button>
    </div>
  );
}

import styles from "./ListHeader.module.scss";

interface ListHeaderProps {
  totalTasksCount: number;
  completedTasksCount: number;
}

export function ListHeader({
  completedTasksCount,
  totalTasksCount,
}: ListHeaderProps) {
  return (
    <header className={styles.listHeader}>
      <div>
        <strong>Tarefas criadas</strong>
        <span>{totalTasksCount}</span>
      </div>
      <div>
        <strong>Concluidas</strong>
        <span>{completedTasksCount}</span>
      </div>
    </header>
  );
}

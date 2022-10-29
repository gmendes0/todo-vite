import styles from "./EmptyList.module.scss";

import clipboardSVG from "../assets/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={clipboardSVG} alt="icone de prancheta" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

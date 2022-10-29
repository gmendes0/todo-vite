import styles from "./Logo.module.scss";
import logoSVG from "../assets/logo.svg";

export function Logo() {
  return (
    <header className={styles.header}>
      <img src={logoSVG} alt="logo todo" />
    </header>
  );
}

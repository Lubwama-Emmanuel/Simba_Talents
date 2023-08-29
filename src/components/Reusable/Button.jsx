import styles from "./Button.module.css";

export default function Button({ children }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={styles.btn}>
      {children}
    </a>
  );
}

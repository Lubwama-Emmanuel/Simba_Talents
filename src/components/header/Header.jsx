import styles from "./Header.module.css";
import Links from "../Reusable/Links";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_div}>
        <img src="logo.png" alt="simba_talents_logo" className={styles.logo} />
      </div>
      <div className={styles.links_div}>
        <Links linksStyle={styles.links} linkStyle={styles.link} />
      </div>
    </header>
  );
}

import Button from "../Reusable/Button";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.newsletter_section}>
      <div className={styles.subscribe}>
        <h3 className={styles.heading_secondary}>
          Subscribe to our newsletter!
        </h3>
        <p>Sign up for our latest newletter, products and offer</p>
        <input type="text" placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </div>
    </section>
  );
}

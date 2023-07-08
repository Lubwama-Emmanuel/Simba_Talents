import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.services}>
      <Service service={"Software Development"} />
    </div>
  );
}

function Service({ service }) {
  return (
    <div className={styles.service}>
      <h2>{service}</h2>
      <p>lorem</p>
      <p>lorem</p>
    </div>
  );
}

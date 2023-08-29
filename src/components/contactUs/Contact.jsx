import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_sec}>
      <ReachOut />
      <Form />
    </div>
  );
}

function ReachOut() {
  return (
    <div className={styles.reach_out}>
      <h3>Reach Out!</h3>
      <p>Call Us</p>
      <p>
        <a href="tel">+1(202)-340-2124</a>
      </p>
      <p>Email Us</p>
      <p>
        <a href="mailTo:info@simbatalents.com">info@simbatalents.com</a>
      </p>
      <p>Core Business Hours</p>
      <p>Mon-Fri : 9am - 5pm Eastern Time</p>
    </div>
  );
}

function Form() {
  return (
    <div className={styles.form}>
      <h2>
        GET IN TOUCH <br></br> WITH US!
      </h2>
      <form>
        <input type="text" placeholder="Enter your name" />
        <br></br>
        <input type="email" placeholder="Enter your Email Address" />
        <br></br>
        <input type="text" placeholder="Message" />
      </form>
    </div>
  );
}

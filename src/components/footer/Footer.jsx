import styles from "./Footer.module.css";
import Links from "../Reusable/Links";
import Separator from "../Reusable/Separator";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_div}>
        <SimbaInfo />
        <QuickLinks />
        <Contact />
        <Connect />
      </div>
      <Copyright />
    </footer>
  );
}

function SimbaInfo() {
  return (
    <div className={styles.simba_info}>
      <img src="logo.png" alt="Simba logo" className={styles.logo} />
      <p>
        Simba Talents Group strives to connect Africa’s highly skilled and
        deeply motivated workforce with companies seeking talent from across the
        globe.
      </p>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className={styles.quick_links}>
      <h2>Quick Links</h2>
      <Separator />
      <Links linksStyle={styles.links} />
    </div>
  );
}

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <Separator />

      <p>
        Headquaters:<br></br>Fairfax, VA
      </p>
      <p>
        Uganda Branch<br></br>P.O. Box 118109, Kampala, Uganada, Plot<br></br>
        291 Wabitembe-Matugga, Kampala,<br></br>UGANDA
      </p>
      <p>
        Email:
        <br></br>
        <a href="Mailto:info@simbatalents.com">info@simbatalents.com</a>
      </p>
    </div>
  );
}

function Connect() {
  return (
    <div className={styles.connect}>
      <h2>Connect With Us</h2>
      <Separator />
    </div>
  );
}

function Copyright() {
  return (
    <div className={styles.copyright}>
      <p>Copyright 2023 simbatalents | Powered by Simbatalents</p>
    </div>
  );
}

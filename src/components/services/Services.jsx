/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../Reusable/Button";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.services}>
      <Choose />
      <ServicesOffered />
      <Question />
    </div>
  );
}

function Choose() {
  return (
    <div className={styles.choose}>
      <h2 className={styles.choose_heading}>why choose us?</h2>
      <div className={styles.reasons}>
        <div className={styles.reasons_con}>
          <div className={styles.reason}>
            <h4 className={styles.primary_heading}>Top Talent</h4>
            <p>
              Clients can benefit from the expertise and skills of exceptional
              graduates from top universities.
            </p>
          </div>
          <div className={styles.reason}>
            <h4 className={styles.primary_heading}>Top Talent</h4>
            <p>
              Clients can benefit from the expertise and skills of exceptional
              graduates from top universities.
            </p>
          </div>
          <div className={styles.reason}>
            <h4 className={styles.primary_heading}>Top Talent</h4>
            <p>
              Clients can benefit from the expertise and skills of exceptional
              graduates from top universities.
            </p>
          </div>
          <div className={styles.reason}>
            <h4 className={styles.primary_heading}>Top Talent</h4>
            <p>
              Clients can benefit from the expertise and skills of exceptional
              graduates from top universities.
            </p>
          </div>
        </div>
        <div className={styles.reasons_image}>
          <img
            src="reasons.jpg"
            alt="people discussing"
            className={styles.reasons_img}
          />
        </div>
      </div>
    </div>
  );
}

function ServicesOffered() {
  return (
    <div className={styles.offered}>
      <h2 className={styles.choose_heading}>services offered</h2>
      <div className={styles.service_offered}>
        <div className={styles.service_desc}>
          <h4 className={styles.primary_heading}>
            software & mobile app development
          </h4>
          <p>
            We provide comprehensive software development services, including
            mobile app development, website development and maintenance, and
            code debugging. Our experienced team delivers high-quality solutions
            for iOS and Android apps, responsive websites, and ensures smooth
            software performance. We offer ongoing support and timely bug fixes.
            With transparent communication and customized solutions, we bring
            your ideas to life. Contact us for reliable and efficient software
            development tailored to your needs.<a href="#">Contact us</a>
          </p>
        </div>
        <div className={styles.service_image}>
          <img
            src="software_pic.webp"
            alt="Guy on a computer"
            className={styles.service_img}
          />
        </div>
      </div>
      <div className={styles.service_offered}>
        <div className={styles.service_image}>
          <img
            src="software_pic.webp"
            alt="Guy on a computer"
            className={styles.service_img}
          />
        </div>
        <div className={styles.service_desc}>
          <h4 className={styles.primary_heading}>
            software & mobile app development
          </h4>
          <p>
            We provide comprehensive software development services, including
            mobile app development, website development and maintenance, and
            code debugging. Our experienced team delivers high-quality solutions
            for iOS and Android apps, responsive websites, and ensures smooth
            software performance. We offer ongoing support and timely bug fixes.
            With transparent communication and customized solutions, we bring
            your ideas to life. Contact us for reliable and efficient software
            development tailored to your needs.<a href="#">Contact us</a>
          </p>
        </div>
      </div>
      <div className={styles.service_offered}>
        <div className={styles.service_desc}>
          <h4 className={styles.primary_heading}>
            software & mobile app development
          </h4>
          <p>
            We provide comprehensive software development services, including
            mobile app development, website development and maintenance, and
            code debugging. Our experienced team delivers high-quality solutions
            for iOS and Android apps, responsive websites, and ensures smooth
            software performance. We offer ongoing support and timely bug fixes.
            With transparent communication and customized solutions, we bring
            your ideas to life. Contact us for reliable and efficient software
            development tailored to your needs.<a href="#">Contact us</a>
          </p>
        </div>
        <div className={styles.service_image}>
          <img
            src="software_pic.webp"
            alt="Guy on a computer"
            className={styles.service_img}
          />
        </div>
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className={styles.question}>
      <h2 className={styles.choose_heading}>
        questions? call us on +1 (202)-340-2124
      </h2>
      <Button>Email Us</Button>
    </div>
  );
}

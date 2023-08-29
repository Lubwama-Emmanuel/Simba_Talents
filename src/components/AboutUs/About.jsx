import styles from "./About.module.css";
import Button from "../Reusable/Button";

export default function About() {
  return (
    <section>
      <Intial />
      <CoreValues />
      <Founders />
      <Mission />
    </section>
  );
}

function Intial() {
  return (
    <div className={styles.intial_sec}>
      <div className={styles.intial_image}></div>
      <div className={styles.intial_desc}>
        <h2>about us</h2>
        <p>
          Simba Talents is a dynamic and forward-thinking consulting services
          provider on a mission to empower and uplift African youth in their
          pursuit of meaningful employment. We go beyond the conventional
          approach by identifying, mentoring, and developing high-potential,
          under and unemployed individuals. With a focus on unlocking their
          talents and bridging the gap between education and employment, we are
          paving the way for a brighter future for the youth in Africa. Join us
          in transforming lives and creating opportunities for success at Simba
          Talents.
        </p>
        <Button>learn more</Button>
      </div>
    </div>
  );
}

function CoreValues() {
  return (
    <div className={styles.core_values}>
      <h2 className={styles.big_heading}>our core values</h2>
      <div className={styles.values}>
        <div className={styles.value}>
          <h4>Selfless Ambition</h4>
          <p>
            We believe that ambition becomes truly meaningful when it is coupled
            with a genuine concern for the well-being of others. We are
            motivated by the desire to achieve the best outcomes not only for
            ourselves but also for our clients, communities, and each other. Our
            selfless ambition fuels our dedication to creating a positive
            impact.
          </p>
        </div>
        <div className={styles.value}>
          <h4>Selfless Ambition</h4>
          <p>
            We believe that ambition becomes truly meaningful when it is coupled
            with a genuine concern for the well-being of others. We are
            motivated by the desire to achieve the best outcomes not only for
            ourselves but also for our clients, communities, and each other. Our
            selfless ambition fuels our dedication to creating a positive
            impact.
          </p>
        </div>
        <div className={styles.value}>
          <h4>Selfless Ambition</h4>
          <p>
            We believe that ambition becomes truly meaningful when it is coupled
            with a genuine concern for the well-being of others. We are
            motivated by the desire to achieve the best outcomes not only for
            ourselves but also for our clients, communities, and each other. Our
            selfless ambition fuels our dedication to creating a positive
            impact.
          </p>
        </div>
      </div>
    </div>
  );
}

function Founders() {
  return (
    <div className={styles.founders}>
      <h1>our founders</h1>
      <p>
        Simba Talents was founded by two individuals who understand the
        challenges of finding meaningful employment. Inspired by their own
        journeys, they are dedicated to supporting others facing similar
        situations, particularly talented African youth who complete their
        university education but struggle to secure stable employment. We
        identify high-potential individuals and provide comprehensive
        mentorship, training, and development to launch successful careers.
        Together, we bridge the gap and create opportunities for those in need.
      </p>
    </div>
  );
}

function Mission() {
  return (
    <div className={styles.mission}>
      <h2>more about simba talents group</h2>
      <div className={styles.elements_con}>
        <div className={styles.element}>
          <h4>our mission</h4>
          <p>
            We take great pride in our mission, which is to build better
            employment opportunities for youth. By identifying, educating, and
            employing talented individuals, we aim to provide exceptional
            services to domestic and foreign businesses. Through our work, we
            contribute to the growth and success of our clients while
            simultaneously opening doors for aspiring young professionals in
            Africa.
          </p>
        </div>
        <div className={styles.element}>
          <h4>our mission</h4>
          <p>
            We take great pride in our mission, which is to build better
            employment opportunities for youth. By identifying, educating, and
            employing talented individuals, we aim to provide exceptional
            services to domestic and foreign businesses. Through our work, we
            contribute to the growth and success of our clients while
            simultaneously opening doors for aspiring young professionals in
            Africa.
          </p>
        </div>
        <div className={styles.element}>
          <h4>our mission</h4>
          <p>
            We take great pride in our mission, which is to build better
            employment opportunities for youth. By identifying, educating, and
            employing talented individuals, we aim to provide exceptional
            services to domestic and foreign businesses. Through our work, we
            contribute to the growth and success of our clients while
            simultaneously opening doors for aspiring young professionals in
            Africa.
          </p>
        </div>
      </div>
    </div>
  );
}

import Button from "../Reusable/Button";
import Header from "../header/Header";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Header />
      <div className={styles.hero__hero_text}>
        <h2>looking to tap into the african talent pool?</h2>
        <p>
          By 2035, Africa’s working age population is expected to grow by 450
          million people, but without effective policy change, there will only
          be about 100 million jobs available for them. Source: World Bank
          Group’s Africa Competitiveness Report 2017. Simba Talents is comprised
          of the top graduates of the finest universities in Africa are
          carefully selected through a rigorous hiring process. They are highly
          skilled and trained to provide quality services in computer software
          and phone application development, website development, research and
          due diligence, and virtual assistance.
        </p>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
}

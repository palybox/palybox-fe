import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navigation />
        <section className={styles.section}>
          <h5 className={styles.h5}>Conciously curated cannabis</h5>
          <h3 className={styles.h3}>
            Reclaim, control over your cannabis experience with our{" "}
            <span className={styles.highlight}>monthly</span> curated boxes.
          </h3>
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2}>How it <span className={styles.chunk}>works</span></h2>
          <div>
            <h3 className={styles.h3_guide}>Step 1</h3>
            <p className={styles.guide}>
              <strong>Choose your preferences.</strong> This is your chance to
              tell us what you love.
            </p>
          </div>
          <div>
            <h3 className={styles.h3_guide}>Step 2</h3>
            <p className={styles.guide}>
              <strong>Box curation.</strong> Our experts choose premium cannabis
              products just for you!
            </p>
          </div>
          <div>
            <h3 className={styles.h3_guide}>Step 3</h3>
            <p className={styles.guide}>
              <strong>Deliver to your door.</strong> Enjoy a new exciting
              experience every month.
            </p>
          </div>
        </section>
        <section className={styles.section}>Image</section>
        <section className={styles.section}>
          <h2 className={styles.h2}><span className={styles.chunk}>Trusted</span> Partners</h2>
          <div>
            <h3 className={styles.h3}>
              We are proudly partnereed with leading{" "}
              <span className={styles.highlight}>cannabis brands</span> and{" "}
              <span className={styles.highlight}>growers</span> in Colorado.
            </h3>
          </div>
        </section>
        <section className={styles.section}>
          <h2>About the Brand</h2>
          <div>
            <h3>Quality. Inclusivity. Education.</h3>
            <p>
              At Paly, we aim to provide an unparalleled cannabis experience by
              delivering top-tier products directly to your doorstep.
            </p>
            <p>
              <strong>
                We envision a future where quality cannabis is available,
                accessible, and enjoyed by all.
              </strong>
            </p>
          </div>
          <h2>About the Founder</h2>
          <h3>Aja Palmino</h3>
          <div>
            <p>
              Aja is a pioneer in the cannabis space with over a decade of
              experience in the industry.
            </p>
            <p>
              She is passionate about incorporating a more empathetic approach
              to cannabis so that there is a restored faith in the industry.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          Stay in our loop
          <h3 className={styles.h3}>
            We want to get to know <span className={styles.highlight}>you</span>
            .
          </h3>
          Sign Up
        </section>
      </div>
      <Footer />
    </main>
  );
}

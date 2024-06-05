import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navigation />
        <section className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.heroGrid}>
            <div className={styles.posOne}>
              <Image
                src="/icons/Cannabis Jar.svg"
                width={250}
                height={250}
              ></Image>
            </div>
            <div className={styles.posTwo}>
              <Image
                src="/icons/White Box.svg"
                width={250}
                height={250}
              ></Image>
            </div>
          </div>
          <h5 className={styles.h5}>Conciously curated cannabis</h5>
          <div className={styles.heroText}>
            <h3 className={styles.h3}>
              Reclaim, control over your cannabis experience with our{" "}
              <span className={styles.highlight}>monthly</span> curated boxes.
            </h3>
          </div>
          <div className={styles.centeredDiv}>
            <form className={styles.formContainer}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className={styles.inputField}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={styles.inputField}
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <section
          className={`${styles.section} ${styles.worksSection} ${styles.wavyTop}`}
        >
          <h2 className={styles.h2}>
            How it <span className={styles.chunk}>works</span>
          </h2>
          <div className={styles.howTo}>
            <div className={styles.steps}>
              <div className={styles.centeredDiv}>
                <Image
                  src="/steps/01-inquiry.svg"
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                ></Image>
              </div>
              <h3 className={styles.h3}>Step 1</h3>
              <p className={styles.guide}>
                <strong>Choose your preferences.</strong>
                <br></br>This is your chance to tell us what you love.
              </p>
            </div>
            <div className={styles.steps}>
              <div className={styles.centeredDiv}>
                <Image
                  src="/steps/02-box.svg"
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                ></Image>
              </div>
              <h3 className={styles.h3}>Step 2</h3>
              <p className={styles.guide}>
                <strong>Box curation.</strong>
                <br></br>Our experts choose premium cannabis products just for
                you!
              </p>
            </div>
            <div className={styles.steps}>
              <div className={styles.centeredDiv}>
                <Image
                  src="/steps/03-delivery.svg"
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                ></Image>
              </div>
              <h3 className={styles.h3}>Step 3</h3>
              <p className={styles.guide}>
                <strong>Deliver to your door.</strong>
                <br></br>Enjoy a new exciting experience every month.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className="">
            <img src="/media/billboard.jpg" width="100%"></img>
          </div>
        </section>
        <section className={`${styles.section} ${styles.partnerSection}`}>
          <div className={`${styles.partnerHeading} ${styles.centeredDiv}`}>
            <h2>
              <span className={styles.chunk}>Trusted</span> Partners
            </h2>
            <div className={styles.crossPos}>
              <Image src="/icons/Cross.svg" width={200} height={200}></Image>
            </div>
          </div>
          <div>
            <h3 className={styles.h3}>
              We are proudly partnered with leading{" "}
              <span className={styles.highlight}>cannabis brands</span> and{" "}
              <span className={styles.highlight}>growers</span> in Colorado.
            </h3>
          </div>
          <div></div>
        </section>
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.aboutGrid}>
            <div>placeholder for image</div>
            <div className={styles.aboutBrand}>
              <div
                className={`${styles.subHeadingStripePurp} ${styles.paddingRight}`}
              >
                <h2>
                  About the <span className={styles.empha}>Brand</span>
                </h2>
              </div>
              <div>
                <div className={styles.paddingRight}>
                  <h3>Quality. Inclusivity. Education.</h3>
                  <p>
                    At Paly, we aim to provide an unparalleled cannabis
                    experience by delivering top-tier products directly to your
                    doorstep.
                  </p>
                  <p>
                    <strong>
                      We envision a future where quality cannabis is available,
                      accessible, and enjoyed by all.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.aboutFounder}>
              <div
                className={`${styles.subHeadingStripeLime} ${styles.paddingLeft}`}
              >
                <h2>
                  About the <span className={styles.empha}>Founder</span>
                </h2>
              </div>
              <div>
                <div className={styles.paddingLeft}>
                  <h3>Aja Palmino</h3>
                  <p>
                    Aja is a pioneer in the cannabis space with over a decade of
                    experience in the industry.
                  </p>
                  <p>
                    <strong>
                      She is passionate about incorporating a more empathetic
                      approach to cannabis so that there is a restored faith in
                      the industry.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ajaPort}>
              <Image
                src="/media/Aja MAsk.png"
                width={700}
                height={700}
                ></Image>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.kitSection}`}>
          <div className={styles.greenStarPosOne}>
            <Image src="/media/7-green.svg" width={700} height={700}></Image>
          </div>
          <div className={styles.greenStarPosTwo}>
            <Image src="/media/7-green.svg" width={700} height={700}></Image>
          </div>
          <div className={styles.centeredDiv}>
            <div className={styles.kitHeading}>
              <div className={styles.fiveStarPos}>
                <Image
                  src="/icons/5.svg"
                  width={150}
                  height={150}
                  style={{ objectFit: "contain" }}
                ></Image>
              </div>
              <h4>Stay in our loop</h4>
              <div className={styles.heartPos}>
                <Image
                  src="/icons/Heart.svg"
                  width={150}
                  height={150}
                  style={{ objectFit: "contain" }}
                ></Image>
              </div>
            </div>
          </div>
          <h3 className={styles.h3}>
            We want to get to know{" "}
            <span className={styles.highlight}>you!</span>
          </h3>
          <div className={styles.centeredDiv}>
            <form className={styles.formContainer}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className={styles.inputField}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={styles.inputField}
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

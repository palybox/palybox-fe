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
                alt="Icon of a medicine jar"
              ></Image>
            </div>
            <div className={styles.posTwo}>
              <Image
                src="/icons/White Box.svg"
                width={250}
                height={250}
                alt="Icon of a package with the Paly logo on it"
              ></Image>
            </div>
          </div>
          <div className={styles.heroText}>
            <h5 className={styles.h5}>Conciously curated cannabis</h5>
            <h3 className={styles.h3}>
              Reclaim control over your cannabis experience with our{" "}
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
                  alt="Icon to illustrate the step"
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
                  alt="Icon to illustrate the step"
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
                  alt="Icon to illustrate the step"
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
        <section className={`${styles.sectionImg}`}>
          <div className={styles.gallery}>
            <img src="/media/billboard.jpg"></img>
          </div>
        </section>
        {/* <section className={`${styles.section} ${styles.partnerSection}`}>
          <div className={`${styles.partnerHeading} ${styles.centeredDiv}`}>
            <h2>
              <span className={styles.chunk}>Trusted</span> Partners
            </h2>
            <div className={styles.crossPos}>
              <Image
                src="/icons/Cross.svg"
                width={200}
                height={200}
                alt="Icon of a green medical cross"
              ></Image>
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
        </section> */}
        <section className={`${styles.section} ${styles.about}`}>
          <div>
            <h2>We believe you deserve better.</h2>
            <div>
              <p>
                Welcome to a world where quality, education, and inclusivity are
                at the forefront of your cannabis experience.
              </p>
              <h2>why paly stands out.</h2>
              <ol>
                <li>
                  Customer-Centric Service: Unlike many dispensaries, we
                  prioritize your needs offering carefully curated products.
                </li>
                <li>
                  Empowering Education: We provide accessible, comprehensive
                  information about each product and brand, ensuring you make
                  informed choices.
                </li>
                <li>
                  Inclusive and Diverse: We support smaller, high-quality
                  brands, breaking the mold of monopolistic competition to bring
                  you the best variety.
                </li>
              </ol>
              <p>
                Imagine a subscription box that not only delivers premium
                products but also empowers you with knowledge and supports
                diverse, up-and-coming brands. With Paly, you become part of a
                community that values quality, transparency, and inclusivity.
              </p>
            </div>
            <div>
              <p>
                Don&apos;t settle for less. Step into a world where your needs come
                first. Transform your cannabis experience with Paly.
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.kitSection}`}>
{/*           <div className={styles.greenStarPosOne}>
            <Image
              src="/media/7-green.svg"
              width={700}
              height={700}
              alt="Icon of a green wavy star"
            ></Image>
          </div>
          <div className={styles.greenStarPosTwo}>
            <Image
              src="/media/7-green.svg"
              width={700}
              height={700}
              alt="Icon of a green wavy star"
            ></Image>
          </div> */}
          <div className={styles.centeredDiv}>
            <div className={styles.kitHeading}>
              <div className={styles.fiveStarPos}>
                <Image
                  src="/icons/5.svg"
                  width={150}
                  height={150}
                  style={{ objectFit: "contain" }}
                  alt="Icon of a green wavy star"
                ></Image>
              </div>
              <h4>Stay in our loop</h4>
              <div className={styles.heartPos}>
                <Image
                  src="/icons/Heart.svg"
                  width={150}
                  height={150}
                  style={{ objectFit: "contain" }}
                  alt="Icon of a heart"
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

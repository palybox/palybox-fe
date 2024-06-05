import React from "react";
import Link from "next/link";
import styles from "../app/page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogo}>
            <Image src="/media/Logomark1.png" width={800} height={800}></Image>
          </div>
          <div className={styles.footerInfo}>
            <div>
              <h3>Questions? We&apos;d love to hear from you!</h3>
            </div>
            <div>
              <p>
                Contact us at{" "}
                <Link href="mailto:hello@palybox.com">hello@palybox.com</Link>
              </p>
            </div>
            <div className={styles.socialWrapper}>
              <Link href="https://" className={styles.socialIcons}>
                <Image src="/social/tiktok.svg" width="50" height="50"></Image>
              </Link>
              <Link href="https://" className={styles.socialIcons}>
                <Image
                  src="/social/instagram.svg"
                  width="50"
                  height="50"
                ></Image>
              </Link>
              <Link href="https://" className={styles.socialIcons}>
                <Image
                  src="/social/facebook.svg"
                  width="50"
                  height="50"
                ></Image>
              </Link>
              <Link href="https://" className={styles.socialIcons}>
                <Image
                  src="/social/linkedin.svg"
                  width="50"
                  height="50"
                ></Image>
              </Link>
              <Link href="https://" className={styles.socialIcons}>
                <Image src="/social/youtube.svg" width="50" height="50"></Image>
              </Link>
            </div>
            <div className={styles.footerHand}>
              <Image src="/media/Hand.svg" width={500} height={500}></Image>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

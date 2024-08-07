import React from "react";
import Link from "next/link";
import styles from "../app/page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogo}>
            <Image src="/media/Logomark1.png" alt="palybox logo" width={800} height={800}></Image>
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
              <Link href="https://tiktok.com" target="_blank" className={styles.socialIcons}>
                <Image src="/social/Tiktok.svg" width={50} height={50}></Image>
              </Link>
              <Link href="https://instagram.com" target="_blank" className={styles.socialIcons}>
                <Image
                  src="/social/Instagram.svg"
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link href="https://facebook.com" target="_blank" className={styles.socialIcons}>
                <Image
                  src="/social/Facebook.svg"
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className={styles.socialIcons}>
                <Image
                  src="/social/LinkedIn.svg"
                  width={50}
                  height={50}
                ></Image>
              </Link>
              <Link href="https://youtube.com" target="_blank" className={styles.socialIcons}>
                <Image src="/social/Youtube.svg" width={50} height={50}></Image>
              </Link>
            </div>
          </div>
          <div className={styles.footerHand}>
              <img src="/media/Hand.svg" alt="hang loose hand" width={500} height={500}></img>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

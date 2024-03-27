import React from "react";
import Link from "next/link";
import styles from "../app/page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
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
            <Image src="/social/instagram.svg" width="50" height="50"></Image>
          </Link>
          <Link href="https://" className={styles.socialIcons}>
            <Image src="/social/facebook.svg" width="50" height="50"></Image>
          </Link>
          <Link href="https://" className={styles.socialIcons}>
            <Image src="/social/linkedin.svg" width="50" height="50"></Image>
          </Link>
          <Link href="https://" className={styles.socialIcons}>
            <Image src="/social/youtube.svg" width="50" height="50"></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

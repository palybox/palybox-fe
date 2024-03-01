import React from "react";
import Link from "next/link";
import styles from "../app/page.module.css";

const Footer = () => {
  return (
    <footer>
        <div className={styles.footer}>
        Footer is here
        <h3>Questions? We&apos;d love to hear from you!</h3>
        <p>Contact us at hello@palybox.com</p>
        <div>
            <div>TikTok</div>
            <div>Instagram</div>
            <div>Facebook</div>
            <div>LinkedIn</div>
            <div>YouTube</div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
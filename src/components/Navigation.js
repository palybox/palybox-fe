import React from "react";
import Link from "next/link";
import styles from "../app/page.module.css"

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <img
          className={styles.paly}
          src="/logo.png"
        ></img>
      </Link>
    </nav>
  );
};

export default Navigation;

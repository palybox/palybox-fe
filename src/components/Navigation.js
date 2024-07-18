'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../app/page.module.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // Adjust the value based on when you want the logo to resize
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <Link href="/">
        <img
          className={`${styles.paly} ${isScrolled ? styles["paly-shrink"] : ""}`}
          src="/logo.png"
        />
      </Link>
    </nav>
  );
};

export default Navigation;
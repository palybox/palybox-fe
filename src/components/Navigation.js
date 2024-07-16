import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/logo.png"
          width={300}
          height={200}
          style={{ objectFit: "contain" }}
        ></Image>
      </Link>
    </nav>
  );
};

export default Navigation;

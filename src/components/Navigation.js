import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            width={300}
            height={200}
            style={{ objectFit: "contain" }}
          ></Image>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

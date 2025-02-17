import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.webp";

function Logo() {

  return (
    <Link href="/" passHref>
        <Image
          src={logo}
          alt="logo"
          priority
          className="w-[5rem] h-[5rem] rounded-md object-cover"
        />
    </Link>
  );
}
export default Logo;


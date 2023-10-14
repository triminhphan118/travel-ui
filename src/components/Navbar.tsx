import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="relative z-30 p-5 flexBetween max-container padding-container">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5  transition-all  hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex">
        <Button
          type="button"
          icon="/user.svg"
          title="Login"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import huluLogo from "../src/images/hulu-logo-2.png";
import HeaderItem from "./HeaderItem";
import {
  CheckBadgeIcon,
  CircleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CircleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassCircleIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src={huluLogo}
        alt="hulu logo"
        width={200}
        height={200}
      />
    </header>
  );
};

export default Header;

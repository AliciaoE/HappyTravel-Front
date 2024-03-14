"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import NavBar from "./NavBar";
import Search from "./Search";
import { useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mt-[2rem] flex flex-col items-center lg:max-w-[78%] lg:flex-row lg:mx-auto lg:border-b-[0.1rem] lg:border-quaternary-blue">
      <div className="flex flex-col w-full items-center gap-[1.5rem] lg:flex-row lg:basis-[90%] lg:justify-between ">
        <Image
          src="/image/Logo.svg"
          alt="Logo"
          width={150}
          height={100}
          className="w-[8rem] lg:pb-[0.5rem]"
        />
        {pathname === "/" && <Search />}
      </div>

      <NavBar />
    </header>
  );
}

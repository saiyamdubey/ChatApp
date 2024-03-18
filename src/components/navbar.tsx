import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className=" flex w-dvw items-center justify-evenly sm:flex-row px-20 font-serif font-extrabold sm:p-8  pt-3 z-50 gap-[45rem]  sm:gap-10 bg-transparent">
        <div className=" sm:pl-2 text-3xl sm:text-[20px] ">ConnectIt.io</div>
        <div className=" flex flex-row gap-10 sm:gap-3 sm:mb-1">
          <Link
            className=" flex flex-row font-mono "
            href="https://github.com/saiyamdubey"
          >
            <Image
              src="github (1).svg"
              width={25}
              height={25}
              alt="github"
              className="mr-3"
            />
            <p className="sm:hidden">Github</p>
          </Link>
          <Link
            className="flex flex-row font-mono "
            href="https://twitter.com/Saiyam02079791"
          >
            <Image
              src={"twitter (1).svg"}
              width={25}
              height={25}
              alt="ig"
              className=" mr-3"
            />
            <p className="sm:hidden">- Twitter</p>
          </Link>
          <Link
            className=" flex flex-row font-mono "
            href="https://www.instagram.com/_saiyam_dubey/"
          >
            <Image
              src={"instagram (1).svg"}
              width={25}
              height={25}
              alt="ig"
              className="mr-4"
            />
            <p className="sm:hidden">Instagram</p>
          </Link>
        </div>
      </div>
    </>
  );
}

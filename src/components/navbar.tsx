import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className=" 2xl:flex w-dvw sm:flex sm:justify-between items-center justify-evenly gap-[40rem] font-serif font-extrabold sm:p-2  pt-3">
        <div className="mt-2 mb-3 sm:ml-4 sm:mt-3 text-3xl sm:text-xl  ">
          ConnectIt.io
        </div>
        <div className="bg-transparent flex flex-row gap-10 ">
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
            <p>Github</p>
          </Link>
          <Link
            className=" flex flex-row font-mono "
            href="https://twitter.com/Saiyam02079791"
          >
            <Image
              src={"twitter (1).svg"}
              width={25}
              height={25}
              alt="ig"
              className=" mr-3"
            />
            <p>- Twitter</p>
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
            Instagram
          </Link>
        </div>
      </div>
    </>
  );
}

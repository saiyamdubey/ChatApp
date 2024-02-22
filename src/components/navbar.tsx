import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className="sm:w-dvw z-10 flex justify-around gap-10 items-center mt-4">
        <div className="bg-transparent font-mono font-extrabold text-4xl sm:text-xl ">
          ConnectMe.io
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
            Github
          </Link>
          <Link
            className=" flex flex-row font-mono "
            href="https://github.com/saiyamdubey"
          >
            <Image
              src={"twitter (1).svg"}
              width={25}
              height={25}
              alt="ig"
              className=" mr-3"
            />
            - Twitter
          </Link>
          <Link
            className=" flex flex-row font-mono "
            href="https://github.com/saiyamdubey"
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

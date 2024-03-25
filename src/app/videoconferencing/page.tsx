"use client";

// import React, { useEffect } from "react";

// function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
//   var maxPos = chars.length;
//   for (var i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// // export function getUrlParams(url = window.location.href) {
// //   let urlStr = url.split("?")[1];
// //   // return new URLSearchParams(urlStr);
// // }

// export default function Page() {
//   const roomID = "ram" ;

//   useEffect(() => {
//     const myMeeting = async (element) => {
//       if (typeof window === "undefined") return;

//       const { ZegoUIKitPrebuilt } = await import(
//         "@zegocloud/zego-uikit-prebuilt"
//       );

//       const appID = 1951306805;
//       const serverSecret = "7631914ccc8f251898066b596856c9e8";
//       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//         appID,
//         serverSecret,
//         roomID,
//         randomID(5),
//         randomID(5)
//       );

//       const zp = ZegoUIKitPrebuilt.create(kitToken);

//       zp.joinRoom({
//         container: element,

//         sharedLinks: [
//           {
//             name: "Sharable link",
//             url:
//               window.location.protocol +
//               "//" +
//               window.location.host +
//               window.location.pathname +
//               "?roomID=" +
//               roomID,
//           },
//         ],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.VideoConference,
//         },
//       });
//     };

//     const element = document.querySelector(".myCallContainer");
//     if (element) {
//       myMeeting(element);
//     }
//   }, [roomID]);

//   return <div className="myCallContainer w-dvw h-dvh m-auto"></div>;
// }

"use client";

import { Meteors } from "@/components/ui/meteors";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const { v4: uuidv4 } = require("uuid");

function Room() {
  const router = useRouter();
  const [room, setRoom] = useState("");
  const [joinroom, setjoinRoom] = useState("");

  const makeuuid = async () => {
    const uuid = await uuidv4();
    setRoom(uuid);
  };

  useEffect(() => {
    makeuuid();
  }, []);

  const handleSubmit = async (e: any, room: any) => {
    e.preventDefault();
    // if (!room || room === "") return;
    const a = await makeuuid();
    router.push(`/videoconferencing/${room}`);
  };

  const handlejoinroom = async (e: any, joinroom: string) => {
    e.preventDefault();
    if (!joinroom || joinroom === "") return;
    router.push(`/videoconferencing/${joinroom}`);
  };

  return (
    <>
      <div className="flex sm:flex-col justify-center items-center gap-[15rem] sm:gap-[8rem] rounded-3xl bg-transparent w-[100%] h-dvh flex-row overflow-hidden">
        <div className="relative max-w-sm w-[50rem] sm:w-[80%] h-[15rem] md:h-2/2  ">
          <div className="absolute inset-0 h-full w-[30rem] sm:w-[100%] bg-gradient-to-r from-transparent to-blue-600 transform scale-[1.20] rounded-full blur-3xl flex justify-center items-center" />
          <div className="relative h-full w-[30rem] sm:w-[100%]  border border-white px-8 sm:py-6 overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
            <div className="join flex flex-col justify-center items-center text-center">
              <h1 className="font-extrabold font-mono text-4xl sm:text-xl mb-4 text-center text-violet-100">
                Join Room
              </h1>
              <input
                className=" text-white text-lg w-[150%] bg-transparent border-2 mb-4 border-white focus:outline-none sm:h-10 sm:w-[110%] placeholder-gray-400 py-2 px-3 sm:rounded-3xl sm:pl-2 sm:p-1 rounded-3xl"
                type="text"
                onChange={(e) => setjoinRoom(e.target.value)}
                placeholder="Write Room Name ..."
              />
              <button
                onClick={() => {
                  handlejoinroom(event, joinroom);
                }}
                className="visible sm:hidden text-white p-4 text-lg sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white mt-4"
                type="submit"
              >
                Join Room
              </button>
              {/* sm wala niichu hai  */}
              <button
                className="sm:visible 2xl:hidden text-white sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full p-4 px-6 sm:rounded-md  sm:text-white mt-4"
                type="submit"
                onClick={() => {
                  handlejoinroom(event, joinroom);
                }}
              >
                Join
              </button>
            </div>
            <Meteors number={12} />
          </div>
        </div>
        <div className="relative max-w-sm w-[50rem] sm:w-[80%] h-[15rem] md:h-2/2 ">
          <div className="absolute inset-0 h-full w-[30rem] sm:w-[100%] bg-gradient-to-r from-pink-800 to-transparent-500 transform scale-[1.20] rounded-full blur-3xl flex justify-center items-center" />
          <div className="relative h-full w-[30rem] sm:w-[100%] border-2 border-white px-8 sm:py-6 overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
            <div className="join flex flex-col justify-center items-center text-center">
              <h1 className="font-extrabold font-mono text-4xl sm:text-xl mb-4 text-center text-violet-100">
                Create Room
              </h1>
              <button
                className="visible sm:hidden text-white p-4 text-lg sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white mt-4"
                type="submit"
                onClick={() => {
                  handleSubmit(event, room);
                }}
              >
                Create Unique Room
              </button>
              {/* sm wala niichu hai  */}
              <button
                className="sm:visible 2xl:hidden text-white sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full p-4 sm:rounded-md  sm:text-white mt-4"
                type="submit"
                onClick={() => {
                  handleSubmit(event, room);
                }}
              >
                Create
              </button>
            </div>
            <Meteors number={15} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;

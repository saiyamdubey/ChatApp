// "use client";

// import React, { useEffect } from "react";


// function randomID(len:any) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
//   var maxPos = chars.length;
//   for (var i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }
// export default function Page({ params }: { params: { videoid: string } }) {
//   const roomID =  params.videoid;

//   useEffect(() => {
//     const myMeeting = async (element :any) => {
//       if (typeof window === "undefined") return;

//       const { ZegoUIKitPrebuilt } = await import(
//         "@zegocloud/zego-uikit-prebuilt"
//       );

//       // const APPID : number= process.env.APPID;
//       // const serverSecret = process.env.serverSecret;
//       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//         process.env.APPID,
//         process.env.serverSecret,
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
//               window.location.pathname 
//               // "?roomID=" +
//               // roomID,
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

import React, { useEffect } from "react";

function randomID(len: number): string {
  let result = "";
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  var maxPos = chars.length;
  for (var i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

interface PageProps {
  params: { videoid: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const roomID = params.videoid;

  useEffect(() => {
    const myMeeting = async (element: HTMLElement | null) => {
      if (typeof window === "undefined" || !element) return;

      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );

      const APPID = process.env.NEXT_PUBLIC_APPID;
      const serverSecret = process.env.NEXT_PUBLIC_SS;

      if (!APPID || !serverSecret) {
        console.error("APPID or serverSecret is missing");
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        Number(APPID),
        serverSecret,
        roomID,
        randomID(5),
        randomID(5)
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Sharable link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    const element = document.querySelector(".myCallContainer") as HTMLElement | null;
    myMeeting(element);
  }, [roomID]);

  return <div className="myCallContainer w-dvw h-dvh m-auto"></div>;
};

export default Page;

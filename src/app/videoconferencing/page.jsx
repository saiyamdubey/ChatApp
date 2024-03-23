"use client";

import React, { useEffect } from "react";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  var maxPos = chars.length;
  for (var i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

// export function getUrlParams(url = window.location.href) {
//   let urlStr = url.split("?")[1];
//   // return new URLSearchParams(urlStr);
// }

export default function Page() {
  const roomID = "ram" ;

  useEffect(() => {
    const myMeeting = async (element) => {
      if (typeof window === "undefined") return;

      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );

      const appID = 1951306805;
      const serverSecret = "7631914ccc8f251898066b596856c9e8";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
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
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    const element = document.querySelector(".myCallContainer");
    if (element) {
      myMeeting(element);
    }
  }, [roomID]);

  return <div className="myCallContainer w-dvw h-dvh"></div>;
}







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

// export function getUrlParams(url) {
//   if (typeof window === 'undefined') {
//     return null; // or handle differently based on your use case
//   }

//   url = url || window.location.href;
//   let urlStr = url.split("?")[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//   const roomID = typeof window !== 'undefined' ? getUrlParams("www.google.com").get("roomID") || randomID(25) : null;

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

//   return <div className="myCallContainer w-dvw h-dvh"></div>;
// }








// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url = window.location.href
// ) {
//   let urlStr = url.split("?")[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//   const roomID = getUrlParams().get("roomID") || randomID(5);
//   let myMeeting = async (element) => {
//     const appID = 1951306805;
//     const serverSecret = "7631914ccc8f251898066b596856c9e8";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       randomID(5),
//       randomID(5)
//     );
//     const zp = ZegoUIKitPrebuilt.create(kitToken);

//     zp.joinRoom({
//       container: element,
//       sharedLinks: [
//         {
//           name: "Personal link",
//           url:
//             window.location.origin +
//             window.location.pathname +
//             "?roomID=" +
//             roomID,
//         },
//       ],
//       scenario: {
//         mode: ZegoUIKitPrebuilt.VideoConference,
//       },
//     });
//   };
//   return (
//     <>
//       <div
//         className="myCallContainer w-dvw h-dvh"
//         ref={myMeeting}
//         // style={{ width: "100vw", height: "100vh" }}
//       ></div>
//     </>
//   );
// }


// import React from 'react'

// type Props = {}

// export default function page({}: Props) {
//   return (
//     <div>page</div>
//   )
// }
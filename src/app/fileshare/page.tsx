"use client";

import React, { useEffect } from "react";

function randomID(len: any) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  var maxPos = chars.length;
  for (var i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get("roomID") || randomID(25);

  useEffect(() => {
    const myMeeting = async (element: any) => {
      if (typeof window === "undefined") return; // Ensure code runs only on client-side

      // Import ZegoUIKitPrebuilt only on the client-side
      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );

      // generate Kit Token
      const appID = 1951306805;
      const serverSecret = "7631914ccc8f251898066b596856c9e8";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        randomID(5),
        randomID(5)
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal link",
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

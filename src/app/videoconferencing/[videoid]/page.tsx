"use client";

import React, { useEffect } from "react";

function randomID(len:any) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  var maxPos = chars.length;
  for (var i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}
export default function Page({ params }: { params: { videoid: string } }) {
  const roomID =  params.videoid;

  useEffect(() => {
    const myMeeting = async (element :any) => {
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
              window.location.pathname 
              // "?roomID=" +
              // roomID,
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

  return <div className="myCallContainer w-dvw h-dvh m-auto"></div>;
}
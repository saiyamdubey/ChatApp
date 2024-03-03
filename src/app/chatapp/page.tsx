// "use client";

// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("https://chatserver-q3gi.onrender.com/");

// export default function Page() {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [send, setSend] = useState<string>("");

//   useEffect(() => {
//     socket.on("message", (message: string) => {
//       setMessages((prevMessages: string[]) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.off("message");
//     };
//   }, []);

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (send.trim() !== "") {
//       socket.emit("message", send);
//       setSend("");
//     }
//   }

//   return (
//     <>
//       <h1 className=" font-extrabold font-mono text-7xl text-center text-violet-400 ">
//         Private Chatting Room
//       </h1>
//       <div className="flex justify-center flex-col gap-9 items-center">
//         <form onSubmit={handleSubmit}>
//           <input
//             className="text-white text-xl border-2 border-x-white bg-black placeholder:text-gray-400 w-[20rem] rounded-lg h-[5rem] p-4 mt-10 focus:outline-none"
//             type="text"
//             value={send}
//             onChange={(e) => setSend(e.target.value)}
//             placeholder="Type your message"
//           />
//           <button
//             className="text-white text-xl border-y-rose-50 border-2 bg-black rounded-lg px-4 py-2 ml-2"
//             type="submit"
//           >
//             Send Message
//           </button>
//         </form>
//         <div className="">
//           <ul className="text-xl font-mono text-pink-500">
//             {messages.map((message, index) => (
//               <li key={index}>{message}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// const socket = io("https://chatserver-q3gi.onrender.com/");
const socket = io("http://localhost:4000/");

export default function Page() {
  const [messages, setMessages] = useState<
    { username: string; message: string }[]
  >([]);
  const [send, setSend] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    socket.on(
      "message",
      ({ username, message }: { username: string; message: string }) => {
        setMessages((prevMessages) => [...prevMessages, { username, message }]);
      }
    );

    return () => {
      socket.off("message");
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (send.trim() !== "" && username.trim() !== "") {
      socket.emit("message", { username, message: send });
      setSend("");
    }
  }

  return (
    <>
      <h1 className="font-extrabold font-mono text-6xl mb-2 text-center text-violet-400">
        Private Chat
      </h1>
      <div className="h-[80vh] flex">
        <div className="border-2 border-white w-11/12 h-[100%] overflow-y-scroll">
          <ul className="text-2xl font-mono ">
            {messages.map((messageObj, index) => (
              <li
                key={index}
                className={` m-4 p-7 text-xl flex justify-start items-center rounded-3xl bg-violet-900 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ maxWidth: "45%" }}
              >
                <span className="font-bold text-center text-wrap ">
                  {messageObj.username}:
                </span>
                <p className="inline text-wrap ">{messageObj.message}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center border-2 border-wihte bg-orange-700 pl-32 ">
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className=" ">
              <input
                className="text-white text-xl border-2 border-x-white bg-black placeholder:text-gray-400 w-[25rem] rounded-3xl h-[5rem] p-4 mt-5 focus:outline-none"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your Username"
              />
              <input
                className="text-white text-xl border-2 border-x-white bg-black placeholder:text-gray-400 w-[25rem] rounded-3xl h-[5rem] p-4 mt-10 focus:outline-none"
                type="text"
                value={send}
                onChange={(e) => setSend(e.target.value)}
                placeholder="Type your message"
              />

              <button
                className="text-white text-xl mx-auto border-y-rose-50 border-2 bg-black rounded-lg px-4 py-2 block mt-5"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

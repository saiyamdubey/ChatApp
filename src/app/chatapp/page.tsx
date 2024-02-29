// "use client";

// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:4000");

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
//       <h1 className=" font-extrabold text-7xl text-center text-violet-400 ">
//         Messages from Server:
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

// correct for the jsx extention

// This real-time chat app in Next.js uses Socket.IO. Real-time updates on the web can be achieved via long-polling, server-side events, or web sockets. Long-polling involves periodic HTTP requests, server-side events use the browser`s event source API, while web sockets enable two-way communication between client and server.

"use client";

// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";

// let socket;

// const Home = () => {
//   const [message, setMessage] = useState("");
//   const [username, setUsername] = useState("");
//   const [allMessages, setAllMessages] = useState([]);

//   useEffect(() => {
//     socketInitializer();

//     return () => {
//       if (socket) {
//         socket.disconnect();
//       }
//     };
//   }, []);

//   async function socketInitializer() {
//     await fetch("/api/socket");

//     socket = io();

//     socket.on("receive-message", (data) => {
//       setAllMessages((pre) => [...pre, data]);
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log("emitted");

//     if (socket) {
//       socket.emit("send-message", {
//         username,
//         message,
//       });
//     }
//     setMessage("");
//   }

//   return (
//     <div>
//       <h1 className="m-96 bg-orange-600">Chat app</h1>
//       <h1>Enter a username</h1>

//       <input value={username} onChange={(e) => setUsername(e.target.value)} />

//       <br />
//       <br />

//       <div>
//         {allMessages.map(({ username, message }, index) => (
//           <div key={index}>
//             {username}: {message}
//           </div>
//         ))}

//         <br />

//         <form onSubmit={handleSubmit}>
//           <input
//             name="message"
//             placeholder="enter your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             autoComplete={"off"}
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";

// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// let socket: SocketIOClient.Socket;

// const Home: React.FC = () => {
//   const [message, setMessage] = useState<string>("");
//   const [username, setUsername] = useState<string>("");
//   const [allMessages, setAllMessages] = useState<
//     { username: string; message: string }[]
//   >([]);

//   useEffect(() => {
//     socketInitializer();

//     return () => {
//       if (socket) {
//         socket.disconnect();
//       }
//     };
//   }, []);

//   async function socketInitializer() {
//     await fetch("/api/socket");

//     socket = io();

//     socket.on(
//       "receive-message",
//       (data: { username: string; message: string }) => {
//         setAllMessages((prev) => [...prev, data]);
//       }
//     );
//   }

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     console.log("emitted");

//     if (socket) {
//       socket.emit("send-message", {
//         username,
//         message,
//       });
//     }
//     setMessage("");
//   }

//   return (
//     <div>
//       <h1 className=" bg-orange-600 text-center text-4xl font-mono font-extrabold py-6">
//         Stay Connected to Me.io
//       </h1>
//       <div className="flex flex-row justify-center items-center gap-4 m-2">
//         <h1 className=" text-white text-center text-xl font-mono font-bold py-6">
//           Enter a username
//         </h1>

//         <input
//           className=" bg-transparent text-xl text-white pl-7 placeholder:text-gray-400 placeholder:text-lg w-[30rem] h-[4rem] border-2 border-orange-700 rounded-lg "
//           title="message"
//           value={username}
//           placeholder="Username..."
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>

//       <br />
//       <br />

//       <div>
//         {allMessages.map(({ username, message }, index) => (
//           <div key={index}>
//             {username}: {message}
//           </div>
//         ))}

//         <br />

//         <form onSubmit={handleSubmit}>
//           <input
//             name="message"
//             placeholder="enter your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             autoComplete="off"
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [allMessages, setAllMessages] = useState<
    { username: string; message: string }[]
  >([]);

  useEffect(() => {
    socketInitializer();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  async function socketInitializer() {
    await fetch("/api/socket");

    socket = io();

    socket.on(
      "receive-message",
      (data: { username: string; message: string }) => {
        setAllMessages((prev) => [...prev, data]);
      }
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("emitted");

    if (socket) {
      socket.emit("send-message", {
        username,
        message,
      });
    }
    setMessage("");
  }

  return (
    <div>
      <h1 className=" bg-orange-600 text-center text-4xl font-mono font-extrabold py-6">
        Stay Connected to Me.io
      </h1>
      <div className="flex flex-row justify-center items-center gap-4 m-2">
        <h1 className=" text-white text-center text-xl font-mono font-bold py-6">
          {/* Enter a username */}
        </h1>

        <input
          className=" bg-transparent text-xl text-white pl-7 placeholder:text-gray-400 placeholder:text-lg w-[50rem] h-[4rem] border-2 border-green-700 rounded-lg "
          title="message"
          value={username}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <br />
      <br />

      <div className="h-auto justify-center items-center flex-col sticky bottom-4 left-2/4">
        {allMessages.map(({ username, message }, index) => (
          <div key={index}>
            <h1 className="text-emerald-400">{username}</h1> :{" "}
            <p className="text-orange-500">{message}</p>
          </div>
        ))}

        <br />

        <form onSubmit={handleSubmit}>
          <input
            name="message"
            className=" text-white bg-transparent border-2 border-pink-600 placeholder:text-gray-400 w-[30rem] h-[4rem] rounded-lg pl-6 "
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;

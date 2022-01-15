import debug from "debug";
import { useEffect, useState, VFC } from "react";
import { useOnChildAdded } from "../lib/firebase/realtimeDB/read";
import { Message } from "../lib/firebase/type";

export const MessageList: VFC = () => {
  const newMessage = useOnChildAdded<Message>("message");
  const [messages, setMessages] = useState<Message[]>([]);
  debug.log(messages);

  useEffect(() => {
    if (newMessage === null) return;
    setMessages((m) => [...m, newMessage]);
  }, [newMessage]);

  return (
    <>
      <ul>
        {messages?.map((msg) => (
          <li key={msg.key}>
            <div>{msg.date}</div>
            <div>{msg.userId}</div>
            <div>{msg.userName}</div>
            <div>{msg.message}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

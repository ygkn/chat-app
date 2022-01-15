import { ChangeEvent, useState, VFC } from "react";
import { useAuth } from "../context/authContext";
import { writeDB } from "../lib/firebase/realtimeDB/write";
import { DBMessage } from "../lib/firebase/type";

export const SendMessage: VFC = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.currentTarget.value;
    setInput(val);
  };

  const user = useAuth().currentUser;

  const handleClick = () => {
    if (user === null) return;

    const path = "message";
    writeDB<DBMessage>(path, {
      date: Number(new Date()),
      message: input,
      userId: user.uid,
      userName: user.displayName,
    });
  };

  return (
    <div>
      <textarea value={input} onChange={handleChange} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

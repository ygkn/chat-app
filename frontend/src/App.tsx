import { VFC } from "react";

import { Login } from "./component/Login";
import { MessageList } from "./component/MessageList";
import { SendMessage } from "./component/SendMessage";

const App: VFC = () => {
  return (
    <>
      <Login />
      <SendMessage />
      <MessageList />
    </>
  );
};

export default App;

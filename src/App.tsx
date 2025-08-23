import React from "react";
import { ChatBot } from "./entities/ChatBot";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
      <ChatBot />
    </div>
  );
};

export default App;

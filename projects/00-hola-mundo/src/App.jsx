import React, { useState } from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "nelortz",
    name: "Nelortz",
    isFollowing: true,
  },
  {
    userName: "wwe",
    name: "WWE",
    isFollowing: false,
  },
  {
    userName: "netflix",
    name: " Netflix",
    isFollowing: true,
  },
  {
    userName: "disney",
    name: "Disney",
    isFollowing: false,
  },
];

function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName} //Identificador único
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}

export default App;

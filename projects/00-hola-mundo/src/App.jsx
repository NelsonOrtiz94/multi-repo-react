import React, { useState } from 'react';
import './App.css'
import TwitterFollowCard from './TwitterFollowCard';

function App() {
  
  return (
    <section className='App'>
      <TwitterFollowCard  userName="nelortz">
        Nelson Ortiz
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="wwe">
        WWE
      </TwitterFollowCard>
    </section>
  );
}

export default App;

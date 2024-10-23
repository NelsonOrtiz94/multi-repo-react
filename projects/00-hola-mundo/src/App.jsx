import React from 'react';
import './App.css'
import TwitterFollowCard from './TwitterFollowCard';

function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing userName="nelortz" name="Nelson Ortiz" />
      <TwitterFollowCard isFollowing={false} userName="DB_Legends" name="DB_Legends" />
      <TwitterFollowCard isFollowing userName="Crunchyroll" name="Crunchyroll" />
      <TwitterFollowCard isFollowing={false} userName="Netflix" name="Netflix" />
    </section>
  );
}

export default App;

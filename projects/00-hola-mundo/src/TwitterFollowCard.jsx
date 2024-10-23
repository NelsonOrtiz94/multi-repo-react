function TwitterFollowCard({ userName, name , isFollowing}) {

  console.log(isFollowing);
  
 
    return ( 
        <article className='tw-followcard'>
        <header className='tw-followcard-header'>
          <img 
            className='tw-followcard-avatar'
            alt="El avatar de deadmau5"
            src={`https://unavatar.io/${userName}`} />
          <div className='tw-followcard-info'>
            <strong>{name}</strong>
            <span className='tw-followcard-infoUserName'>@{userName}</span>
          </div>
        </header>

        <aside>
          <button className='tw-followcard-button' >
            Seguir
            </button>
        </aside>
      </article>
     );
}

export default TwitterFollowCard;
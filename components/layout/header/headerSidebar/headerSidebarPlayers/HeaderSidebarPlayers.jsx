import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './HeaderSidebarPlayers.module.css'

const HeaderSidebarPlayers = ({maxPlayer: maxPlayerInt}) => {

   const [playersInLobby, setPlayersInLobby] = useState([
      {
         id: 1,
         avatar: "/images/avatar.svg"
      }
   ])

   useEffect(() => {
      const maxPlayer = [...Array(maxPlayerInt - 1).keys()]
      setPlayersInLobby([  
         {
            id: 1,
            avatar: "/images/avatar.svg"
         },
         ...maxPlayer.map(item => ({
            id: null,
            avatar: null,
         })
      )])
   }, [maxPlayerInt])


   return <div className={styles.players}>
      <div className={styles.players__inner}>
         {playersInLobby.map((player, index) => <PlayerAddButton 
            id={player.id}
            avatar={player.avatar}
            key={index}
         />)}  
      </div>
      <div className={styles.players__ratings}>
         <div className={styles['players__ratings-border']}>
            <span className={styles['players__ratings-sum']}>Rating: 1050</span>
         </div>
      </div>
   </div>
}


const PlayerAddButton = ({id, avatar}) => {
   return <button className={`${styles['players__btn']} ${!id ? styles.empty : ''}`}>
      {id ?
         <Image 
            src={avatar}
            width="50"
            height="50"
            alt='avatar'
         />
         :
         <Image 
            src="/images/icon/plus.svg"
            width="20"
            height="20"
            alt='add new'
         />            
      }
   </button>
}

export default HeaderSidebarPlayers
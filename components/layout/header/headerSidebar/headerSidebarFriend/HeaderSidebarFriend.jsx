import getAllFriends from '@/services/friends/getAllFriends'
import settings from '@/websocket/settings'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import Cookies from 'universal-cookie'
import styles from './HeaderSidebarFriend.module.css'
import HeaderSidebarFriendItem from './headerSidebarFriendItem/HeaderSidebarFriendItem'

const HeaderSidebarFriend = ({mobile, isOpen, setIsOpen}) => {

   const { sendMessage, lastMessage, readyState } = useWebSocket(settings.WS_URL, {
      share: true,
      onOpen: () => {
        console.log('WebSocket connection established Invites.');
      }
   })

   const [friendsList, setFriendList] = useState([])

   const [friendsTopHeight, setFriendsTopHeight] = useState(false)
   const friendsTopRef = useRef()

   const cookie = new Cookies()

   const getAllFriendsFunc = async () => {
      const response = await getAllFriends(cookie.get('auth_token'))
      setFriendList(response)
   }

   useEffect(() => {
      getAllFriendsFunc()
   }, [])

   useEffect(() => {

      if (lastMessage?.data) {

         const data = JSON.parse(lastMessage.data)

         if (data.action === 'update_friend') {
            getAllFriendsFunc()
         }

      }
   }, [lastMessage])

   useEffect(() => {
      setFriendsTopHeight(friendsTopRef.current.offsetHeight)
   }, [friendsTopRef])

   return <div 
         className={`${styles.friends} ${isOpen ? styles.open : ''} ${mobile ? styles.mobile : ''}`}
         style={{'--offset-height': `${friendsTopHeight}px`}}
      >
      <button 
         className={styles.friends__top}
         onClick={() => setIsOpen(!isOpen)}
         ref={friendsTopRef}
      >
         <h3 className={styles['friends__top-title']}>Friends</h3>
         <Image 
            className={styles['friends__top-arrow']}
            src="/images/icon/arrow-up.svg"
            width="9"
            height="5"
            alt='arrow'
         />
      </button>
      <div className={`${styles.friends__body} ${!friendsList?.length ? styles.notfound : ''}`}>
         {friendsList.map(friend => (
            <HeaderSidebarFriendItem
               nickname={friend.nickname}   
               avatar_path={friend.avatar_path}
               country_code={friend.country_code}
               friend_id={friend.friend_id}

               getAllFriendsFunc={getAllFriendsFunc}

               key={friend.friend_id}
            />
         ))}
         {!friendsList.length ? 
         <div className={styles['friends__add']}>
            <Image 
               className={styles['friends__add-image']}
               src="/images/icon/add-friends.svg"
               width="96"
               height="52"
               alt=''
            />
            <h2 className={styles['friends__add-title']}>You have no friends.</h2>
            <p className={styles['friends__add-text']}>You can add players as friends directly from their profiles.</p>
            <span className={styles['friends__add-search']}>
               Search by <Link className={styles['friends__add-link']} href="/players-list">nickname</Link>
            </span>
         </div> : 
         <div className={styles.add__friend}>
            <span className={styles['friends__add-search']}>
               Search by <Link className={styles['friends__add-link']} href="/players-list">nickname</Link>
            </span>   
         </div>
         }
      </div>
   </div>
}

export default HeaderSidebarFriend
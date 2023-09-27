import getAllFriends from '@/services/friends/getAllFriends'
import settings from '@/websocket/settings'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import Cookies from 'universal-cookie'
import ProfilePageNoItems from '../profilePageNoItems/ProfilePageNoItems'
import styles from './ProfilePageFriends.module.css'
import ProfilePageFriendsItem from './ProfilePageFriendsItem/ProfilePageFriendsItem'

const ProfilePageFriends = ({friends}) => {

   const [friendsList, setFriendsList] = useState(friends)

   const { sendMessage, lastMessage, readyState } = useWebSocket(settings.WS_URL, {
      share: true,
      onOpen: () => {
        console.log('WebSocket connection established Invites.');
      }
   })

   const cookie = new Cookies()

   const getAllFriendsFunc = async () => {
      const response = await getAllFriends(cookie.get('auth_token'))
      setFriendsList(response)
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

         if (data.action === 'delete_friend') {
            setFriendsList(prevState => [...prevState.filter(player => +player.id !== +data.delete_id)])
         }

      }
   }, [lastMessage])

   return <div className={styles.friends}>
      {friendsList?.length ?
         <div className={styles.friends__inner}>
            {friendsList.map(friend => (
               <ProfilePageFriendsItem
                  nickname={friend.nickname}   
                  avatar_path={friend.avatar_path}
                  country_code={friend.country_code}
                  friend_id={friend.friend_id}

                  getAllFriendsFunc={getAllFriendsFunc}

                  key={friend.friend_id}
               />
            ))}
         </div>
      :
         <ProfilePageNoItems 
            src="/images/icon/teams.svg"
            title="No friends"
            text="have not added any friends."
            nickname="monkey"
         />
      }
   </div>
}

export default ProfilePageFriends
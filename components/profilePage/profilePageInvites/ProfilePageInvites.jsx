import AuthContext from '@/context/AuthContext'
import getFriendsInvites from '@/services/friends/getFriendsInvites'
import viewNotif from '@/services/settings/viewNotif'
import settings from '@/websocket/settings'
import { useContext, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import Cookies from 'universal-cookie'
import ProfilePageNoItems from '../profilePageNoItems/ProfilePageNoItems'
import styles from './ProfilePageInvites.module.css'
import ProfilePageInvitesFriendItem from './profilePageInvitesFriendItem/ProfilePageInvitesFriendItem'

const ProfilePageInvites = ({friendInvites}) => {

   const { sendMessage, lastMessage, readyState } = useWebSocket(settings.WS_URL, {
      share: true,
      onOpen: () => {
        console.log('WebSocket connection established Invites.');
      }
   })

   const cookie = new Cookies()

   const getInvites =  async () => {
      const invites = await getFriendsInvites(cookie.get('auth_token'))
      setInvites(invites)
   }

   useEffect(() => {
      getInvites()
   }, [])

   useEffect(() => {

      if (lastMessage?.data) {

         const data = JSON.parse(lastMessage.data)

         if (data.action === 'new_friend_invite') {
            getInvites()
         }

      }
   }, [lastMessage])

   const [invites, setInvites] = useState(friendInvites)

   const authContext = useContext(AuthContext)


   useEffect(() => {
      (async () => {
         const response = await viewNotif(cookie.get('auth_token'))

         if (response === 'changed') {
            authContext.setIsLogin(authContext.isLogin, authContext.loginInfo.id, authContext.loginInfo.email, 
               authContext.loginInfo.nickname, authContext.loginInfo.avatar_path, authContext.loginInfo.rank,
               authContext.loginInfo.country_code, false)
         }
      })()

      
   }, [])

   return <div className={styles.invites}>
      {!invites?.length ?
      <ProfilePageNoItems 
         src="/images/icon/invites.svg"
         title="No invites"
         text="haven't been invited anywhere yet."
         nickname="monkey"
      />
      : ''}
      {invites.map((invite, index) => (
         <ProfilePageInvitesFriendItem 
            from={invite.nickname}
            src={invite.avatar_path}
            key={invite.invite_id + index}
            invite_id={invite.invite_id}

            setInvites={setInvites}
         />
      ))}
      {/* <ProfilePageInvitesFriendItem from={"monkey"} src="/images/avatar.svg" />
      <ProfilePageInvitesTeamItem from={"monkey"} team={"SHADOW"} src="/images/avatar.svg" /> */}
   </div>
}

export default ProfilePageInvites
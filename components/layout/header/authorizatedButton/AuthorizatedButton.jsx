import AuthContext from '@/context/AuthContext'
import settings from '@/websocket/settings'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import useWebSocket from 'react-use-websocket'
import styles from './AuthorizatedButton.module.css'

const AuthorizatedButton = ({setIsOpenSidebar}) => {

   const authContext = useContext(AuthContext)

   const { sendMessage, lastMessage, readyState } = useWebSocket(settings.WS_URL, {
      share: true,
      onOpen: () => {
        console.log('WebSocket connection established.');
      }
   })

   useEffect(() => {

      if (lastMessage?.data) {

         const data = JSON.parse(lastMessage.data)

         if (data.action === 'new_friend_invite') {
            authContext.setIsLogin(authContext.isLogin, authContext.loginInfo.id, authContext.loginInfo.email, 
               authContext.loginInfo.nickname, authContext.loginInfo.avatar_path, authContext.loginInfo.rank,
               authContext.loginInfo.country_code, authContext.loginInfo.is_notif + 1)
         }

      }
   }, [lastMessage])


   return <>
      <Link href="/profile#invites" className={styles['header__right-notification']}>
      <Image 
         className={styles['header__right-notification-image']}
         src="/images/icon/notification.svg"
         width="34"
         height="34"
         alt='notification'
      />
      {+authContext.loginInfo.is_notif ? 
         <span className={styles['header__right-notification-circle']}>{authContext.loginInfo.is_notif}</span>
      : ''}
      </Link>
      <Link href="/profile" className={styles['header__right-user']}>
         <span className={styles['header__right-user-nickname']}>{authContext?.loginInfo?.nickname}</span>
         <Image 
            className={styles['header__right-user-img']} 
            src={authContext.loginInfo.avatar_path}
            width="50"
            height="50"
            alt='avatar'
         />
      </Link>
      <button className={styles['header__right-sidebar-btn']} onClick={() => setIsOpenSidebar(prevState => !prevState)}>
         <Image 
            className={styles['header__right-sidebar-btn-img']}
            src="/images/icon/menu-sidebar.svg"
            width="20"
            height="14"
            alt="sidebar menu"
         />
      </button>
   </> 
}

export default AuthorizatedButton
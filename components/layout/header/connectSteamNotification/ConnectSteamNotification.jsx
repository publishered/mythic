import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import { useContext } from 'react'
import styles from './ConnectSteamNotification.module.css'

const ConnectSteamNotification = ({setIsConnectSteamOpen}) => {

   const authContext = useContext(AuthContext)
   
   if (!authContext.isLogin) {
      return
   }

   return <div className={styles.notification}>
      <div className={styles['notification__info']}>
         <Image 
            className={styles.notification__img}
            src="/images/icon/logo-white.svg"
            width="25"
            height="25"
            alt="connect steam"
         />
         <p className={styles.notification__text}>
            {
               !authContext.isConnected ?
               'Connect your Steam account to verify your account' :
               'YOUR ACCOUNT IS PENDING. AS SOON AS YOUR ACCOUNT IS VERIFIED YOU WILL RECEIVE A NOTIFICATION.'
            }
         </p>
      </div>
      {
         !authContext.isConnected ?
         <button className={styles.notification__button} onClick={() => setIsConnectSteamOpen(true)}>
            Connect
         </button> :
         <Image 
            src="/images/icon/loader.svg"
            className={styles.notification__loader}
            width="20"
            height="20"
            alt="loading"
         />
      }
      
   </div>
}

export default ConnectSteamNotification
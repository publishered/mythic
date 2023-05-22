import Image from 'next/image'
import styles from './ConnectSteamNotification.module.css'

const ConnectSteamNotification = ({setIsConnectSteamOpen}) => {
   return <div className={styles.notification}>
      <Image 
         className={styles.notification__img}
         src="/images/icon/logo-white.svg"
         width="25"
         height="25"
         alt="connect steam"
      />
      <p className={styles.notification__text}>Connect your Steam account to verify your account</p>
      <button className={styles.notification__button} onClick={() => setIsConnectSteamOpen(true)}>
         Connect
      </button>
   </div>
}

export default ConnectSteamNotification
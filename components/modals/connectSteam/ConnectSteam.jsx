import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Modal from '@/components/UI/modal/Modal'
import Image from 'next/image'
import styles from './ConnectSteam.module.css'

const ConnectSteam = ({isConnectSteamOpen, setIsConnectSteamOpen}) => {

   const connectSteamHandler = e => {
      if (typeof window !== "undefined") {
         document.querySelector('.murly5wwiq8a').click()
      }
   }

   return <Modal isModalOpen={isConnectSteamOpen} setIsModalOpen={setIsConnectSteamOpen}>
      <div className={styles.connect}>
         <button className={styles.connect__close} onClick={e => setIsConnectSteamOpen(false)}>
            <Image src="/images/icon/close.svg" width="15" height="15" alt='close' />
         </button>
         <h2 className={styles.connect__title}>Connect with Steam</h2>
         <p className={styles.connect__subtitle}>Add your Steam account to Mythic Play.</p>
         <ul className={styles.connect__list}>
            <li className={styles.connect__item}>
               <div className={styles['connect__item-top']}>
                  <Image 
                     src="/images/icon/lock.svg"
                     width="19"
                     height="19"
                     alt='public account'
                  />
                  <h3 className={styles['connect__item-top-title']}>Public account</h3>
               </div>
               <div className={styles['connect__item-body']}>
                  <p>Your Steam account and game stats must be public.</p>
                  <p>Private accounts cannot be connected.</p>
               </div>
            </li>
            <li className={styles.connect__item}>
               <div className={styles['connect__item-top']}>
                  <Image 
                     src="/images/icon/secure.svg"
                     width="19"
                     height="19"
                     alt='secure connection'
                  />
                  <h3 className={styles['connect__item-top-title']}>Secure connection</h3>
               </div>
               <div className={styles['connect__item-body']}>
                  <p>Your Steam login credentials will not be shared.</p>
                  <p>Mythic Esports will be able to identify your Steam profile and access information about your Steam account according to your privacy settings.</p>
                  <p>Any information on your Steam profile page that is set to be publicly viewable may be accessed by Mythic Esports.</p>
               </div>
            </li>
         </ul>
         <DefaultButton onClick={connectSteamHandler} className={styles['connect__btn']}>Connect with Steam</DefaultButton>
      </div>
   </Modal>
}

export default ConnectSteam
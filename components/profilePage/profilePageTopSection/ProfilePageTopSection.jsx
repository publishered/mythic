import AuthContext from '@/context/AuthContext'
import ModalFunction from '@/context/ModalFunction'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import styles from './ProfilePageTopSection.module.css'
import ProfilePageTopSectionTab from './profilePageTopSectionTab/ProfilePageTopSectionTab'

const ProfilePageTopSection = ({activeAnchor}) => {

   const modalContext = useContext(ModalFunction)
   const authContext = useContext(AuthContext)

   return <div className={styles.info}>
      <div className={styles.info__top}>
         <Image 
            className={styles['info__top-img']}
            src="/images/avatar.svg"
            width="150"
            height="150"
            alt='avatar'
         />
         <div className={styles['info__top-content']}>
            <div className={styles['info__top-content-top']}>
               <div className={styles['info__top-content-top-nickname-wrapper']}>
                  <h2 className={styles['info__top-content-top-nickname']}>
                     {authContext.loginInfo.nickname}
                  </h2>
                  <Image 
                     className={styles['info__top-content-top-nickname-flag']}
                     src="/images/flags/sweden.svg"
                     width="28"
                     height="21"
                     alt='flag'
                  />
               </div>
               <div className={styles['info__top-content-top-stats']}>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/game.svg"
                           width="15"
                           height="14"
                        />
                        <h3 className={styles['info__top-content-top-stats-item-title']}>Game</h3>
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        CS:GO
                     </span>
                  </div>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/rank.svg"
                           width="15"
                           height="14"
                        />
                        <h3 className={styles['info__top-content-top-stats-item-title']}>Rank</h3>
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        —
                     </span>
                  </div>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/rating.svg"
                           width="15"
                           height="14"
                        />
                        <h3 className={styles['info__top-content-top-stats-item-title']}>Rating</h3>
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        1000
                     </span>
                  </div>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/viewers.svg"
                           width="15"
                           height="14"
                        />
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        0
                     </span>
                  </div>
                  <span className={styles['info__top-content-top-stats-status']}>Online</span>
               </div>
            </div>
            
            <div className={styles['info__top-content-bottom']}>
               <div className={styles['info__top-content-top-stats-mob']}>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/game.svg"
                           width="15"
                           height="14"
                        />
                        <h3 className={styles['info__top-content-top-stats-item-title']}>Game</h3>
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        CS:GO
                     </span>
                  </div>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/rank.svg"
                           width="15"
                           height="14"
                        />
                        <h3 className={styles['info__top-content-top-stats-item-title']}>Rank</h3>
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        —
                     </span>
                  </div>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/rating.svg"
                           width="15"
                           height="14"
                        />
                        <h3 className={styles['info__top-content-top-stats-item-title']}>Rating</h3>
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        1000
                     </span>
                  </div>
                  <div className={styles['info__top-content-top-stats-item']}>
                     <div className={styles['info__top-content-top-stats-item-title-wrapper']}>
                        <Image 
                           className={styles['info__top-content-top-stats-item-icon']}
                           src="/images/icon/viewers.svg"
                           width="15"
                           height="14"
                        />
                     </div>
                     <span className={styles['info__top-content-top-stats-item-title-value']}>
                        0
                     </span>
                  </div>
               </div>
               <div className={styles['info__top-content-bottom-inner']}>
                  <div className={styles['info__top-content-bottom-item']}>
                     <h3 className={styles['info__top-content-bottom-item-title']}>ID</h3>
                     <span className={styles['info__top-content-bottom-item-value']}>1501231</span>
                  </div>
                  <div className={styles['info__top-content-bottom-item']}>
                     <h3 className={styles['info__top-content-bottom-item-title']}>Joined</h3>
                     <span className={styles['info__top-content-bottom-item-value']}>2 months ago</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className={styles.info__bottom}>
         <div className={styles['info__bottom-left']}>
            {
               authContext.isConnected ? 
               // <span className={styles['info__bottom-left-connect-steam']}>
               //    <Image 
               //       src="/images/icon/steam.svg"
               //       width="18"
               //       height="18"
               //       alt="steam icon"
               //    />
               //    Connected
               // </span> :

               <button className={styles['info__bottom-left-connect-steam']} onClick={() => modalContext.setIsConnectSteamOpen(true)}>
                  <Image 
                     src="/images/icon/steam.svg"
                     width="18"
                     height="18"
                     alt="steam icon"
                  />
                  Reconnect your Steam
               </button> :
               <button className={styles['info__bottom-left-connect-steam']} onClick={() => modalContext.setIsConnectSteamOpen(true)}>
                  <Image 
                     src="/images/icon/steam.svg"
                     width="18"
                     height="18"
                     alt="steam icon"
                  />
                  Connect your Steam
               </button> 
            }
            <Link href="/profile/settings" className={styles['info__bottom-left-settings']}>
               <Image
                  src="/images/icon/settings.svg"
                  width="16"
                  height="16"
                  alt='settings'
               />
               Settings
            </Link>
         </div>
         <div className={styles['info__bottom-tabs']}>
            <ProfilePageTopSectionTab anchor={activeAnchor}>
               Matches
            </ProfilePageTopSectionTab>
            <ProfilePageTopSectionTab anchor={activeAnchor}>
               Tournaments
            </ProfilePageTopSectionTab>
            <ProfilePageTopSectionTab anchor={activeAnchor}>
               Teams
            </ProfilePageTopSectionTab>
            <ProfilePageTopSectionTab anchor={activeAnchor}>
               Friends
            </ProfilePageTopSectionTab>
            <ProfilePageTopSectionTab anchor={activeAnchor}>
               Invites
            </ProfilePageTopSectionTab>
         </div>
      </div>
   </div>
}

export default ProfilePageTopSection
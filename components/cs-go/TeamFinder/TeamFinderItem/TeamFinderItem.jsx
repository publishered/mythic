import DefaultButtonWithState from '@/components/UI/defaultButtonWithState/DefaultButtonWithState'
import GrayButton from '@/components/UI/grayButton/GrayButton'
import Image from 'next/image'
import styles from './TeamFinderItem.module.css'

const TeamFinderItem = () => {
   return <div className={styles.item}>
      <div className={styles.item__top}>
         <div className={styles['item__top-info']}>
            <Image 
               className={styles['item__top-info-img']}
               src="/images/avatar.svg"
               width="50"
               height="50"
               alt="avatar"
            />
            <div className={styles['item__top-info-content']}>
               <div className={styles['item__top-info-title-wrapper']}>
                  <h2 className={styles['item__top-info-title']}>monkey</h2>
                  <span className={styles['item__top-info-rank']}>unranked</span>
               </div>
               <div className={styles['item__top-info-content-about']}>
                  <Image 
                     className={styles['item__top-info-content-flag']}
                     src="/images/flags/sweden.svg"
                     width="17"
                     height="13"
                     alt="flag"
                  />
                  <ul className={styles['item__top-info-content-about-list']}>
                     <li className={styles['item__top-info-content-about-item']}>joined about 4 hours ago</li>
                     {/* <li className={styles['item__top-info-content-about-item']}>0 reputation</li> */}
                  </ul>
               </div>
            </div>
         </div>
         <div className={styles['item__top-btn']}>
            <GrayButton className={styles['item__top-show-more']}>
               show more
            </GrayButton>
            <DefaultButtonWithState
               className={styles['item__top-show-invite']}
               steamMsg={"You can't join the team until you connect your "}
               verifyMsg={"You can't join the team until your account is verified."}
            >
               invite to team
            </DefaultButtonWithState>
         </div>
      </div>
      <div className={styles.item__bottom}>
         <div className={styles['item__bottom-left']}>
            <div className={styles.item__roles}>
               <h3 className={styles['item__roles-title']}>Roles</h3>
               <div className={styles['item__roles-inner']}>
                  <Image 
                     src="/images/icon/role-sheet.svg"
                     width="40"
                     height="40"
                     alt='role'
                  />
                  <Image 
                     src="/images/icon/role-ak47.svg"
                     width="40"
                     height="40"
                     alt='role'
                  />
                  <Image 
                     src="/images/icon/role-knife.svg"
                     width="40"
                     height="40"
                     alt='role'
                  />
                  <Image 
                     src="/images/icon/role-grenade.svg"
                     width="40"
                     height="40"
                     alt='role'
                  />
                  <Image 
                     src="/images/icon/role-awp.svg"
                     width="40"
                     height="40"
                     alt='role'
                  />
               </div>
            </div>
            <div className={styles['item__bottom-steam']}>
               <h3 className={styles['item__bottom-steam-title']}>Steam account</h3>
               <div className={styles['item__bottom-steam-inner']}>
                  <Image 
                     className={styles['item__bottom-steam-img']}
                     src="/images/avatar.svg"
                     width="50"
                     height="50"
                     alt="avatar"
                  />
                  <div className={styles['item__bottom-steam-nickname-wrapper']}>
                     <span className={styles['item__bottom-steam-nickname']}>monkey</span>
                     <Image 
                        className={styles['item__bottom-steam-img']}
                        src="/images/icon/requirements-verified.svg"
                        width="16"
                        height="16"
                        alt="verified"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles['item__bottom-right']}>
            <h3 className={styles['item__bottom-right-title']}>Stats</h3>
            <div className={styles['item__bottom-right-inner']}>
               <span className={styles['item__bottom-right-win']}>5W</span>
               <span className={styles['item__bottom-right-loose']}>20L</span>
               <span className={styles['item__bottom-right-percent']}>(25%)</span>
            </div>
            <div className={styles['item__bottom-right-scale']}>
               <span style={{width: '25%'}}></span>
            </div>
         </div>
      </div>
      <div className={styles['item__top-mob-btn']}>
         <GrayButton className={styles['item__top-show-more']}>
            show more
         </GrayButton>
         <DefaultButtonWithState 
            className={styles['item__top-show-invite']}
            steamMsg={"You can't join the team until you connect your "}
            verifyMsg={"You can't join the team until your account is verified."}
         >
            invite to team
         </DefaultButtonWithState>
      </div>
   </div>
}

export default TeamFinderItem
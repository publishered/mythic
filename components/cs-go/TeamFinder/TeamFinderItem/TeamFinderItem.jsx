import DefaultButtonWithState from '@/components/UI/defaultButtonWithState/DefaultButtonWithState'
import GrayButton from '@/components/UI/grayButton/GrayButton'
import getColorForRank from '@/functions/getColorForRank'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'
import styles from './TeamFinderItem.module.css'

const TeamFinderItem = ({avatar_path, nickname, country_code, register_date, rank, all_matches, win_matches, loose_matches}) => {

   const winRate = Math.round((((win_matches * 100 / all_matches)) + Number.EPSILON) * 100) / 100

   const rankColor = getColorForRank(rank)

   return <div className={styles.item}>
      <div className={styles.item__top}>
         <div className={styles['item__top-info']}>
            <Image 
               className={styles['item__top-info-img']}
               src={avatar_path}
               width="50"
               height="50"
               alt="avatar"
            />
            <div className={styles['item__top-info-content']}>
               <div className={styles['item__top-info-title-wrapper']}>
                  <h2 className={styles['item__top-info-title']}>{nickname}</h2>
                  <span 
                     className={styles['item__top-info-rank']} 
                     style={{backgroundColor: rankColor.rankBackground, color: rankColor.isBlack ? 'var(--light-gray-color)' : ''}}
                  >
                     {rank}
                     </span>
               </div>
               <div className={styles['item__top-info-content-about']}>
                  <ReactCountryFlag 
                     className={styles['item__top-info-content-flag']}
                     countryCode={country_code}
                     width="17"
                     height="13"
                     alt='flag'
                     svg
                     style={
                        {
                           width: "17px", 
                           height: "13px",
                           borderRadius: "3px"
                        }
                     }
                  />
                  <ul className={styles['item__top-info-content-about-list']}>
                     <li className={styles['item__top-info-content-about-item']}>{register_date}</li>
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
                     <span className={styles['item__bottom-steam-nickname']}>{nickname}</span>
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
               <span className={styles['item__bottom-right-win']}>{win_matches}W</span>
               <span className={styles['item__bottom-right-loose']}>{loose_matches}L</span>
               <span className={styles['item__bottom-right-percent']}>({winRate}%)</span>
            </div>
            <div className={styles['item__bottom-right-scale']}>
               <span style={{width: `${winRate}%`}}></span>
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
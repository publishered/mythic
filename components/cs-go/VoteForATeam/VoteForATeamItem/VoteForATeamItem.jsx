import DefaultButtonWithState from '@/components/UI/defaultButtonWithState/DefaultButtonWithState'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'
import styles from './VoteForATeamItem.module.css'

const VoteForATeamItem = ({avatar, name, country_code, tier, date, votes, played_games, stats_win, stats_loose, rating}) => {
   return <div className={styles.item}>
      <div className={styles.item__top}>
         <div className={styles['item__top-info']}>
            <Image 
               className={styles['item__top-info-img']}
               src={avatar}
               width="50"
               height="50"
               alt="avatar"
            />
            <div className={styles['item__top-info-text']}>
               <div className={styles['item__top-info-text-title-wrapper']}>
                  <h2 className={styles['item__top-info-text-title']}>{name}</h2>
                  {/* <Image
                     src="/images/flags/sweden.svg" 
                     width="17"
                     height="13"
                     alt='flag'
                  /> */}
                  <ReactCountryFlag 
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
                  <span className={styles['item__top-info-text-title-rank']}>tier {tier}</span>
               </div>
               <p className={styles['item__top-info-text-created']}>{date}</p>
            </div>
         </div>
         <div className={styles['item__top-button-wrapper']}>
            <DefaultButtonWithState 
               className={styles['item__top-button']}
               steamMsg={"You can't vote for a team until you connect your "}
               verifyMsg={"You can't vote for a team until your account is verified."}
            >
               vote for a team
            </DefaultButtonWithState>
         </div>
      </div>
      <div className={styles.item__bottom}>
         <div className={styles['item__bottom-stats']}>
            <div className={styles['item__bottom-stats-item']}>
               <h3 className={styles['item__bottom-stats-title']}>Rating</h3>
               <span className={styles['item__bottom-stats-value']}>#{rating}</span>
            </div>
            <div className={styles['item__bottom-stats-item']}>
               <h3 className={styles['item__bottom-stats-title']}>Votes</h3>
               <span className={styles['item__bottom-stats-value']}>{votes}</span>
            </div>
            <div className={styles['item__bottom-stats-item']}>
               <h3 className={styles['item__bottom-stats-title']}>Played games</h3>
               <span className={styles['item__bottom-stats-value']}>{played_games}</span>
            </div>
         </div>
         <div className={styles['item__bottom-general']}>
            <h3 className={styles['item__bottom-general-title']}>Stats</h3>
            <div className={styles['item__bottom-general-inner']}>
               <span className={styles['item__bottom-general-win']}>{stats_win}W</span>
               <span className={styles['item__bottom-general-loose']}>{stats_loose}L</span>
               <span className={styles['item__bottom-general-percent']}>({Math.round((((stats_win * 100 / played_games)) + Number.EPSILON) * 100) / 100}%)</span>
            </div>
         </div>
      </div>
      <div className={styles['item__top-mob-button-wrapper']}>
         <DefaultButtonWithState
            className={styles['item__top-mob-button']}
            steamMsg={"You can't vote for a team until you connect your "}
            verifyMsg={"You can't vote for a team until your account is verified."}
         >
            vote for a team
         </DefaultButtonWithState>
      </div>
   </div>
}

export default VoteForATeamItem
import DefaultButtonWithState from '@/components/UI/defaultButtonWithState/DefaultButtonWithState'
import Image from 'next/image'
import styles from './VoteForATeamItem.module.css'

const VoteForATeamItem = () => {
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
            <div className={styles['item__top-info-text']}>
               <div className={styles['item__top-info-text-title-wrapper']}>
                  <h2 className={styles['item__top-info-text-title']}>SHADOW</h2>
                  <Image
                     src="/images/flags/sweden.svg" 
                     width="17"
                     height="13"
                     alt='flag'
                  />
                  <span className={styles['item__top-info-text-title-rank']}>tier 5</span>
               </div>
               <p className={styles['item__top-info-text-created']}>created more than 3 months ago</p>
            </div>
         </div>
         <div className={styles['item__top-button-wrapper']}>
            <DefaultButtonWithState 
               className={styles['item__top-button']}
            >
               vote for a team
            </DefaultButtonWithState>
         </div>
      </div>
      <div className={styles.item__bottom}>
         <div className={styles['item__bottom-stats']}>
            <div className={styles['item__bottom-stats-item']}>
               <h3 className={styles['item__bottom-stats-title']}>Rating</h3>
               <span className={styles['item__bottom-stats-value']}>#1</span>
            </div>
            <div className={styles['item__bottom-stats-item']}>
               <h3 className={styles['item__bottom-stats-title']}>Votes</h3>
               <span className={styles['item__bottom-stats-value']}>125</span>
            </div>
            <div className={styles['item__bottom-stats-item']}>
               <h3 className={styles['item__bottom-stats-title']}>Played games</h3>
               <span className={styles['item__bottom-stats-value']}>153</span>
            </div>
         </div>
         <div className={styles['item__bottom-general']}>
            <h3 className={styles['item__bottom-general-title']}>Stats</h3>
            <div className={styles['item__bottom-general-inner']}>
               <span className={styles['item__bottom-general-win']}>100W</span>
               <span className={styles['item__bottom-general-loose']}>53L</span>
               <span className={styles['item__bottom-general-percent']}>(49.5%)</span>
            </div>
         </div>
      </div>
      <div className={styles['item__top-mob-button-wrapper']}>
         <DefaultButtonWithState
            className={styles['item__top-mob-button']}
         >
            vote for a team
         </DefaultButtonWithState>
      </div>
   </div>
}

export default VoteForATeamItem
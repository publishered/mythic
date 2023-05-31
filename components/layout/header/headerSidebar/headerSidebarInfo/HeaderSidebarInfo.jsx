import Image from 'next/image'
import styles from './HeaderSidebarInfo.module.css'

const HeaderSidebarInfo = () => {
   return <div className={styles.info}>
      <div className={styles.info__top}>
         <h2 className={styles['info__top-nickname']}>
            monkey
         </h2>
         <Image 
            className={styles['info__top-flag']}
            src="/images/flags/sweden.svg"
            width="28"
            height="21"
            alt='flag'
         />
      </div>
      <div className={styles.info__stats}>
         <div className={styles['info__stats-tier']}>
            <span className={styles['info__stats-tier-name']}>tier 5</span>
            <span className={styles['info__stats-tier-score']}>1000/1050</span>
         </div>
         <div className={styles['info__stats-other']}>
            <div className={styles['info__stats-item']}>
               <Image className={styles['info__stats-item-img']}
                  src="/images/icon/aim.svg"
                  alt="aim stats"
                  width="16"
                  height="16"
               />
               <span className={`${styles['info__stats-item-text']}`}>—</span>
            </div>
            <div className={styles['info__stats-item']}>
               <Image className={styles['info__stats-item-img']}
                  src="/images/icon/stats-gray.svg"
                  alt="kd stats"
                  width="16"
                  height="16"
               />
               <span className={`${styles['info__stats-item-text']}`}>—</span>
            </div>
         </div>
      </div>
   </div>
}

export default HeaderSidebarInfo
import Image from 'next/image'
import Link from 'next/link'
import styles from './PlayersListPageTableItem.module.css'

const PlayersListPageTableItem = ({change}) => {
   return <>
      <div className={`${styles.item} ${change === 'down' ? styles.down : styles.up}`}>
         <div className={styles.item__username}>
            <Image 
               className={styles['item__username-avatar']}
               src="/images/avatar.svg"
               width="70"
               height="70"
               alt="avatar"
            />
            <div className={styles['item__username-nick-wrapper']}>
               <h2 className={styles['item__username-nick']}>Sooren</h2>
               <Image
                  className={styles['item__username-nick-flag']}
                  width="17"
                  height="13"
                  src="/images/flags/sweden.svg"
               />
               <span className={styles['item__username-nick-rank']}>tier 5</span>
            </div>
         </div>
         <span className={styles.item__top}>1</span>
         <div className={styles.item__rating}>
            <span className={styles['item__rating-value']}>1051</span>
            <Image 
               className={styles['item__rating-img']}
               width="14"
               height="14"
               src={change === 'down' ? "/images/icon/rank-down.svg" : "/images/icon/rank-up.svg"}
            />
            <span className={styles['item__rating-change']}>55</span>
         </div>
         <span className={styles.item__wins}>79%</span>
         <span className={styles.item__kd}>1.45</span>
         <span className={styles.item__joined}>2 months ago</span>
         <Image 
            className={styles['item__rating-change']}
            width="150"
            height="40"
            alt='rating change'
            src={change === 'down' ? "/images/icon/rating-change-down.svg" : "/images/icon/rating-change-up.svg"}
         />
         <button className={styles['item__btn']}>
            <Image 
               className={styles['item__btn-img']}
               width="15"
               height="15"
               alt='arrow right'
               src="/images/icon/arrow-right.svg"
            />
         </button>
      </div>
      <Link href="#" className={`${styles.item__mob} ${change === 'down' ? styles.down : styles.up}`}>
         <div className={styles['item__username-mob-wrapper']}>
            <div className={styles.item__username}>
               <Image 
                  className={styles['item__username-avatar']}
                  src="/images/avatar.svg"
                  width="70"
                  height="70"
                  alt="avatar"
               />
               <div className={styles['item__username-nick-wrapper']}>
                  <h2 className={styles['item__username-nick']}>Sooren</h2>
                  <Image
                     className={styles['item__username-nick-flag']}
                     width="17"
                     height="13"
                     src="/images/flags/sweden.svg"
                  />
                  <span className={styles['item__username-nick-rank']}>tier 5</span>
               </div>
            </div>
            <button className={styles['item__btn']}>
               <Image 
                  className={styles['item__btn-img']}
                  width="15"
                  height="15"
                  alt='arrow right'
                  src="/images/icon/arrow-right.svg"
               />
            </button>
         </div>
         <div className={styles['item__mob-inner']}>
            <span className={styles.item__top}><b>Top:</b> 1</span>
            <div className={styles.item__rating}>
               <b>Rating:</b>
               <span className={styles['item__rating-value']}>1051</span>
               <Image 
                  className={styles['item__rating-img']}
                  width="14"
                  height="14"
                  src={change === 'down' ? "/images/icon/rank-down.svg" : "/images/icon/rank-up.svg"}
               />
               <span className={styles['item__rating-change']}>55</span>
            </div>
            <span className={styles.item__wins}><b>% wins:</b> 79%</span>
            <span className={styles.item__kd}><b>K/D:</b> 1.45</span>
            <span className={styles.item__joined}><b>Joined:</b> 2 months ago</span>
            <div className={styles['item__rating-change-wrapper']}>
               <b>Rating change:</b>
               <Image 
                  className={styles['item__rating-change']}
                  width="150"
                  height="40"
                  alt='rating change'
                  src={change === 'down' ? "/images/icon/rating-change-down.svg" : "/images/icon/rating-change-up.svg"}
               />
            </div>
         </div>
      </Link>
   </>
}

export default PlayersListPageTableItem
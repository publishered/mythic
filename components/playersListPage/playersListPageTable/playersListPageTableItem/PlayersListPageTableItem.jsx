import Image from 'next/image'
import Link from 'next/link'
import styles from './PlayersListPageTableItem.module.css'

const PlayersListPageTableItem = ({change}) => {
   return <>
      <Link href="#" className={`${styles.item} ${change === 'down' ? styles.down : styles.up}`}>
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
      </Link>
   </>
}

export default PlayersListPageTableItem
import Image from 'next/image'
import styles from './HeaderSidebarBalance.module.css'

const HeaderSidebarBalance = () => {
   return <div className={styles.balance}>
      <div className={styles.balance__value}>
         <Image 
            src="/images/icon/wallet.svg"
            width="20"
            height="20" 
            alt='balance'
         />
         <span>Balance</span>
         <span>0.00$</span>
      </div>
      {/* <button className={styles['balance__button']}>
         <Image
            src="/images/icon/plus.svg"
            width="20"
            height="20" 
            alt='add balance'
         />
      </button> */}
   </div>
}

export default HeaderSidebarBalance
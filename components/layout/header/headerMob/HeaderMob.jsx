import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '../../sidebar/Sidebar'
import HeaderSidebar from '../headerSidebar/HeaderSidebar'
import styles from './HeaderMob.module.css'

const HeaderMob = ({isOpenMobHeader}) => {
   return <div className={`${styles.header} ${isOpenMobHeader ? styles.open : ''}`}>
      <Sidebar />
      <div className={styles.header__inner}>
         <ul className={styles.header__list}>
            <li className={styles.header__item}>
               <Link href="/" className={styles.header__link}>Home</Link>
            </li>
            <li className={styles.header__item}>
               <Link href="/help" className={styles.header__link}>Help</Link>
            </li>
            <li className={styles.header__item}>
               <Link href="/anticheat" className={styles.header__link}>Anticheat</Link>
            </li>
            <li className={styles.header__item}>
               <Link href="/anticheat" className={`${styles.header__link} ${styles.header__premium}`}>
                  <Image 
                     height="16"
                     width="16"
                     src="/images/icon/prime.svg"
                     alt='premium'
                  />
                  Premium
               </Link>
            </li>
         </ul>
         <HeaderSidebar headerHeight={120} isOpenSidebar={true} mobile={true} />
         <div className={styles.header__footer}>
            <p>2021 - 2022 MYTHIC ESPORTS LTD</p>
            <p>ALL RIGHTS RESERVED.</p>
         </div>
      </div>
   </div>
}

export default HeaderMob
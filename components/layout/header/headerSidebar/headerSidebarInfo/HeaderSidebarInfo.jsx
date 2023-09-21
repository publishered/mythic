import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import { useContext } from 'react'
import ReactCountryFlag from 'react-country-flag'
import styles from './HeaderSidebarInfo.module.css'

const HeaderSidebarInfo = () => {

   const authContext = useContext(AuthContext)

   return <div className={styles.info}>
      <div className={styles.info__top}>
         <h2 className={styles['info__top-nickname']}>
            {authContext.loginInfo.nickname}
         </h2>
         {/* <Image 
            className={styles['info__top-flag']}
            src="/images/flags/sweden.svg"
            width="28"
            height="21"
            alt='flag'
         /> */}
         {authContext.loginInfo.country_code !== '-' ?
            <ReactCountryFlag 
               className={styles['info__top-flag']}
               countryCode={authContext.loginInfo.country_code}
               width="28"
               height="21"
               alt='flag'
               svg
               style={
                  {
                     width: "28px", 
                     height: "21px",
                     borderRadius: "3px"
                  }
               }
            />: ''}
      </div>
      <div className={styles.info__stats}>
         <div className={styles['info__stats-tier']}>
            <span className={styles['info__stats-tier-name']}>{authContext.loginInfo.rank}</span>
            {/* <span className={styles['info__stats-tier-score']}>1000/1050</span> */}
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
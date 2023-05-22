import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Image from 'next/image'
import styles from './TournamentsItem.module.css'

const TournamentsItem = ({title, mode, src, startsIn, checkIn, reward, registered, verified = true, steam = true, prime = true}) => {
   return <div className={styles.tournament}>
      <div className={styles['tournament__image-wrapper']}>
         <Image 
            src={src}
            width="90"
            height="90"
            alt={`${title} - tournament`}
         />
      </div>
      <h3 className={styles.tournament__title}>{title}</h3>
      <span className={styles.tournament__mode}>{mode}</span>
      <div className={styles.tournament__schedule}>
         <span className={styles['tournament__schedule-start']}>Starts in: {startsIn}</span>
         <span className={styles['tournament__schedule-checkIn']}>Check in: {checkIn} before start</span>
      </div>
      <span className={styles.tournament__reward}>{reward}</span>
      <span className={styles.tournament__registered}>{registered}</span>
      <div className={styles.tournament__requirements}>
         {steam ?
            <Image 
               className={styles['tournament__requirements-img']}
               src="/images/icon/requirements-steam.svg"
               width="25"
               height="25"
               alt='required steam'
            />
            : ''
         }
         {verified ?
            <Image 
               className={styles['tournament__requirements-img']}
               src="/images/icon/requirements-verified.svg"
               width="25"
               height="25"
               alt='required verify'
            />
            : ''
         }
         {prime ?
            <Image
               className={styles['tournament__requirements-img']}
               src="/images/icon/requirements-prime.svg"
               width="25"
               height="25"
               alt='required prime'
            />
            : ''
         }
      </div>
      <DefaultButton className={styles.tournament__btn}>
         Join
      </DefaultButton>
   </div>
}

export default TournamentsItem
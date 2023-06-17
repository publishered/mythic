import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import styles from './TournamentsItem.module.css'

const TournamentsItem = ({title, mode, src, startsIn, checkIn, reward, registered, verified = true, steam = true, prime = true}) => {
   return <>
      <div className={styles.tournament}>
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
               <a 
                  className={styles['tournament__requirements-link']}
                  data-tooltip-id="my-tooltip" 
                  data-tooltip-content="Connected Steam account"
               >
                  <Image 
                     className={styles['tournament__requirements-img']}
                     src="/images/icon/requirements-steam.svg"
                     width="25"
                     height="25"
                     alt='required steam'
                  />
               </a>
               : ''
            }
            {verified ?
               <a 
                  className={styles['tournament__requirements-link']}
                  data-tooltip-id="my-tooltip" 
                  data-tooltip-content="Mythic account verification"
               >
                  <Image 
                     className={styles['tournament__requirements-img']}
                     src="/images/icon/requirements-verified.svg"
                     width="25"
                     height="25"
                     alt='required verify'
                  />
               </a>
               : ''
            }
            {prime ?
               <a 
                  className={styles['tournament__requirements-link']}
                  data-tooltip-id="my-tooltip" 
                  data-tooltip-content="Mythic Premium"
               >
                  <Image
                     className={styles['tournament__requirements-img']}
                     src="/images/icon/requirements-prime.svg"
                     width="25"
                     height="25"
                     alt='required prime'
                  />
               </a>
               : ''
            }
         </div>
         <DefaultButton className={styles.tournament__btn} href="/cs-go/tournament">
            Join
         </DefaultButton>
      </div>
      <Link className={styles['tournament-mob']} href="/cs-go/tournament">
         <div className={styles['tournament__image-wrapper']}>
            <Image 
               src={src}
               width="90"
               height="90"
               alt={`${title} - tournament`}
            />
         </div>
         <div className={styles['tournament__content']}>
            <h3 className={styles.tournament__title}>{title}</h3>
            <span className={styles['tournament__schedule-start']}>Starts in: {startsIn}</span>
            <span className={styles['tournament__registered']}>{mode}, {registered}</span>
         </div>
      </Link>
      <Tooltip id="my-tooltip" className="require-tooltip" classNameArrow="require-tooltip-arrow"/>
   </>
}

export default TournamentsItem
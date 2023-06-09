import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
   return <footer className={styles.footer}>
      <div className={styles.footer__top}>
         <div className={styles['footer__top-inner']}>
            <Link href="/" className={styles['footer__logotype']}>
               <Image
                  src="/images/logo.svg"
                  width="40" height="40" 
                  className={styles['footer__logotype-img']} 
                  alt='logotype'
               />
            </Link>
            <div className={styles['footer__column']}>
               <Link href="/game/cs-go" className={styles['footer__column-title']}>CS:GO</Link>
               <ul className={styles['footer__column-list']}>
                  <li className={styles['footer__column-item']}>
                     <Link href="/cs-go/matchmaking" className={styles['footer__column-item']}>
                        Matchmaking
                     </Link>
                  </li>
                  <li className={styles['footer__column-item']}>
                     <Link href="/cs-go/tournaments" className={styles['footer__column-item']}>
                        Tournaments
                     </Link>
                  </li>
                  <li className={styles['footer__column-item']}>
                     <Link href="/cs-go/team-finder" className={styles['footer__column-item']}>
                        Team finder
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles['footer__column']}>
               <h2 className={styles['footer__column-title']}>Legal</h2>
               <ul className={styles['footer__column-list']}>
                  <li className={styles['footer__column-item']}>
                     <Link href="/terms-of-service" className={styles['footer__column-item']}>
                        Terms of service
                     </Link>
                  </li>
                  <li className={styles['footer__column-item']}>
                     <Link href="/privacy-policy" className={styles['footer__column-item']}>
                        Privacy policy
                     </Link>
                  </li>
                  <li className={styles['footer__column-item']}>
                     <Link href="/cookie-policy" className={styles['footer__column-item']}>
                        Cookie policy
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles['footer__column']}>
               <h2 className={styles['footer__column-title']}>MYTHIC ESPORTS LTD</h2>
               <ul className={styles['footer__column-list-info']}>
                  <li className={styles['footer__column-list-info-item']}>
                     1013 Centre RD STE 403B, Wilmington, DE, USA
                  </li>
                  <li className={styles['footer__column-list-info-item']}>
                     Company registered number (VAT): 10439496D
                  </li>
                  <li className={styles['footer__column-list-info-item']}>
                     Support email: <a href="mailto:support@mythicesports.com">support@mythicesports.com</a>
                  </li>
               </ul>
            </div>
            <div className={styles['footer__column-game']}>
               <Link href="/game/rust" className={styles['footer__column-title']}>RUST</Link>
               <Link href="/game/dota" className={styles['footer__column-title']}>DOTA 2</Link>
               <Link href="/game/team-fortress" className={styles['footer__column-title']}>TEAM FORTRESS 2</Link>
            </div>
         </div>
      </div>
      <div className={styles.footer__copy}>
         <span>2021 - 2022 MYTHIC ESPORTS LTD</span>
         <span>ALL RIGHTS RESERVED</span>
         <a href="https://techiia.com" target='_blank'>PART OF TECHIIA IT-HOLDING</a>
      </div>
   </footer>
}

export default Footer
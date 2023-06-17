import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HelpLayout.module.css';

const HelpLayout = ({children}) => {

   const {pathname} = useRouter()

   const pathnameArr = pathname.split('/')

   console.log(pathnameArr)

   return <div className={styles.layout}>
         <aside className={styles.layout__aside}>
            <ul className={styles['layout__aside-list']}>

               <li className={`${styles['layout__aside-list-item']} 
                  ${
                     !pathnameArr[2] ||
                     pathnameArr[2] === 'privacy-policy' ||
                     pathnameArr[2] === 'cookie-policy' ?
                     styles['layout__aside-list-item--active'] : ''
                  }
               `}>
                  <Link href="/help" className={styles['layout__aside-list-item-link']}>Help</Link>
                  <ul className={styles['layout__aside-sublist']}>
                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${!pathnameArr[2] ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           Help
                        </Link>
                     </li>

                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/privacy-policy"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] === 'privacy-policy' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           Privacy policy
                        </Link>
                     </li>

                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/cookie-policy"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] === 'cookie-policy' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           Cookie policy
                        </Link>
                     </li>
                  </ul>
               </li>

               <li className={`${styles['layout__aside-list-item']} 
                  ${
                     pathnameArr[2] === 'terms-and-conditions' ||
                     pathnameArr[2] === 'anti-cheat-eula' ||
                     pathnameArr[2] === 'privacy-notice' ?
                     styles['layout__aside-list-item--active'] : ''
                  }
               `}>
                  <Link href="/help/terms-and-conditions" className={styles['layout__aside-list-item-link']}>Legal</Link>
                  <ul className={styles['layout__aside-sublist']}>
                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/terms-and-conditions"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] == 'terms-and-conditions' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           Terms & conditions
                        </Link>
                     </li>

                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/anti-cheat-eula"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] === 'anti-cheat-eula' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           Anti-Cheat EULA
                        </Link>
                     </li>

                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/privacy-notice"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] === 'privacy-notice' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           Privacy notice
                        </Link>
                     </li>
                  </ul>
               </li>

               <li className={`${styles['layout__aside-list-item']} 
                  ${
                     pathnameArr[2] === 'about' ||
                     pathnameArr[2] === 'our-team' ?
                     styles['layout__aside-list-item--active'] : ''
                  }
               `}>
                  <Link href="/help/about" className={styles['layout__aside-list-item-link']}>About</Link>
                  <ul className={styles['layout__aside-sublist']}>
                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/about"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] == 'about' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           About Mythic play
                        </Link>
                     </li>

                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/our-team"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] === 'our-team' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           Our team
                        </Link>
                     </li>
                  </ul>
               </li>

               <li className={`${styles['layout__aside-list-item']} 
                  ${
                     pathnameArr[2] === 'security' ?
                     styles['layout__aside-list-item--active'] : ''
                  }
               `}>
                  <Link href="/help/security" className={styles['layout__aside-list-item-link']}>Security</Link>
                  <ul className={styles['layout__aside-sublist']}>
                     <li className={styles['layout__aside-sublist-item']}>
                        <Link href="/help/about"
                         className={`
                           ${styles['layout__aside-sublist-item-link']}
                           ${pathnameArr[2] == 'about' ? styles['layout__aside-sublist-item--active'] : ''}
                         `}>
                           About security
                        </Link>
                     </li>
                  </ul>
               </li>

            </ul>
         </aside>
         <section className={styles.text}>
            {children}
         </section>
      </div> 
}

export default HelpLayout
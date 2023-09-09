import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import Cookies from 'universal-cookie'
import styles from './HeaderSidebarMenu.module.css'

const HeaderSidebarMenu = () => {

   const authContext = useContext(AuthContext)

   const logoutHandler = () => {
      const cookies = new Cookies()
      cookies.remove('auth_token')
      authContext.setIsLogin(false)
   } 

   return <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <li className={styles['menu__list-item']}>
            <Link href="/profile" className={styles['menu__list-link']}>
               <Image 
                  src="/images/icon/profile.svg"
                  width="17"
                  height="18"
                  alt='profile'
               />
               My profile
            </Link>
         </li>
         <li className={styles['menu__list-item']}>
            <Link href="/profile/settings" className={styles['menu__list-link']}>
               <Image 
                  src="/images/icon/settings.svg"
                  width="17"
                  height="17"
                  alt='profile'
               />
               Settings
            </Link>
         </li>
         <li className={styles['menu__list-item']} onClick={logoutHandler}>
            <button href="/log-out" className={styles['menu__list-link']}>
               <Image 
                  src="/images/icon/logout.svg"
                  width="17"
                  height="19"
                  alt='profile'
               />
               Log out
            </button>
         </li>
      </ul>
   </nav>
}

export default HeaderSidebarMenu
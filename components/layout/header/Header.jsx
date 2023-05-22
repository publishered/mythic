import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import AuthorizatedButton from './authorizatedButton/AuthorizatedButton'
import HeaderSidebar from './headerSidebar/HeaderSidebar'

const Header = ({setIsSignUpOpen, setIsSignInOpen}) => {

   const headerRef = useRef()
   const [headerHeight, setHeaderHeight] = useState(0)
   const [isOpenSidebar, setIsOpenSidebar] = useState(0)

   useEffect(() => {
      setHeaderHeight(headerRef?.current?.offsetHeight)
   }, [headerRef])

   return <header className={styles.header} ref={headerRef}> 
      <div className={styles.header__inner}>
         <div className={styles.header__left}>
            <Link className={styles['header__logotype-link']} href="/">
               <Image className={styles.header__logotype} src="/images/logo.svg" width="40" height="40" alt="logotype" />
            </Link>
            <div className={styles['header__left-info']}>
               <ul className={styles['header__left-menu']}>
                  <li className={styles['header__left-item']}>
                     <Link href='/' className={styles['header__left-link']}>
                        Home
                     </Link>
                  </li>
                  <li className={styles['header__left-item']}>
                     <Link href='/help' className={styles['header__left-link']}>
                        Help
                     </Link>
                  </li>
                  <li className={styles['header__left-item']}>
                     <Link href='/anticheat' className={styles['header__left-link']}>
                        Anticheat
                     </Link>
                  </li>
                  <li className={styles['header__left-item']}>
                     <Link href='/' className={`${styles['header__left-link']} ${styles['header__left-link--prime']}`}>
                        <Image 
                           src="/images/icon/prime.svg"
                           alt='prime icon'
                           width="13"
                           height="13"
                        />
                        Premium
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
         <div className={styles.header__right}>
            {false ? 
               <>
               <DefaultButton 
                  className={`${styles['header__right-btn']} ${styles['header__right-login']}`}
                  onClick={() => setIsSignInOpen(true)}
               >
                  Login
               </DefaultButton>
               <DefaultButton className={styles['header__right-btn']} onClick={() => setIsSignUpOpen(true)}>
                  Create account
               </DefaultButton>
               </> :
               <>
                  <AuthorizatedButton setIsOpenSidebar={setIsOpenSidebar} />
                  <HeaderSidebar headerHeight={headerHeight} isOpenSidebar={isOpenSidebar} />
               </>
            }
         </div>
      </div>
   </header>
}

export default Header
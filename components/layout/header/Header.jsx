import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import AuthorizatedButton from './authorizatedButton/AuthorizatedButton'
import HeaderMob from './headerMob/HeaderMob'
import HeaderSidebar from './headerSidebar/HeaderSidebar'

const Header = ({setIsSignUpOpen, setIsSignInOpen, setIsPrimeOpen}) => {

   const headerRef = useRef()
   const [headerHeight, setHeaderHeight] = useState(0)
   const [offsetForSidebar, setOffsetForSidebar] = useState(0)
   const [isOpenSidebar, setIsOpenSidebar] = useState(0)
   const [isOpenMobHeader, setIsOpenMobHeader] = useState(false)

   const getScrollToTop = () => {
      setOffsetForSidebar(window.scrollY)
   }

   useEffect(() => {
      window.addEventListener('scroll', getScrollToTop)

      return () => window.removeEventListener('scroll', getScrollToTop)
   }, [])

   useEffect(() => {
      setHeaderHeight(headerRef?.current?.offsetHeight)
   }, [headerRef.current])

   const router = useRouter();

   useEffect(() => {
      if (isOpenMobHeader) {
         document.documentElement.style.overflowY = 'auto'
         setIsOpenMobHeader(!isOpenMobHeader);
      }
   }, [router.asPath]);

   const toggleMobHeaderHandler = (value) => {
      if (value) {
         document.documentElement.style.overflowY = 'hidden'
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         document.documentElement.style.overflowY = 'auto'
      }
      setIsOpenMobHeader(value)
   }

   const authContext = useContext(AuthContext)

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
                     <a href='https://easy.ac/' target='_blank' className={styles['header__left-link']}>
                        Anticheat
                     </a>
                  </li>
                  <li className={styles['header__left-item']}>
                     <button onClick={() => setIsPrimeOpen(true)} className={`${styles['header__left-link']} ${styles['header__left-link--prime']}`}>
                        <Image 
                           src="/images/icon/prime.svg"
                           alt='prime icon'
                           width="13"
                           height="13"
                        />
                        Premium
                     </button>
                  </li>
               </ul>
            </div>
         </div>
         <div className={styles.header__right}>
            {!authContext.isLogin ? 
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
                  <HeaderSidebar offsetForSidebar={offsetForSidebar} headerHeight={headerHeight} isOpenSidebar={isOpenSidebar} />
               </>
            }
         </div>
         <button className={styles['header__mob-btn']} onClick={() => toggleMobHeaderHandler(!isOpenMobHeader)}>
            <span></span>
            <span></span>
            <span></span>
         </button>
      </div>
      <HeaderMob isOpenMobHeader={isOpenMobHeader} setIsPrimeOpen={setIsPrimeOpen} />
   </header>
}

export default Header
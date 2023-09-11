import ModalFunction from '@/context/ModalFunction'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ConnectSteam from '../modals/connectSteam/ConnectSteam'
import Premium from '../modals/premium/Premium'
import SignInWrapper from '../modals/signIn/SignInWrapper'
import SignUpWrapper from '../modals/signUp/SignUpWrapper'
import styles from './Layout.module.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import ConnectSteamNotification from './header/connectSteamNotification/ConnectSteamNotification'
import HeaderCsGoMenu from './header/headerCsGoMenu/HeaderCsGoMenu'
import HeaderDotaMenu from './header/headerDotaMenu/HeaderDotaMenu'
import HeaderRustMenu from './header/headerRustMenu/HeaderRustMenu'
import HeaderTeamFortressMenu from './header/headerTeamFortressMenu/HeaderTeamFortressMenu'
import Sidebar from './sidebar/Sidebar'

const Layout = ({children}) => {

   const {pathname} = useRouter()

   const [isSignUpOpen, setIsSignUpOpen] = useState(false)
   const [isSignInOpen, setIsSignInOpen] = useState(false)
   const [isPrimeOpen, setIsPrimeOpen] = useState(false)
   const [isConnectSteamOpen, setIsConnectSteamOpen] = useState(false)

   const [gamePage, setGamePage] = useState(pathname?.split('/')[1])
   const [isHomePage, setIsHomePage] = useState(pathname === '/')

   const [isSidebarShow, setIsSidebarShow] = useState(false)

   useEffect(() => {
      setGamePage(pathname?.split('/')[1])
      setIsHomePage(pathname === '/' && pathname !== "/_error")
   }, [pathname])

   const checkIsSidebarShow = () => {
      if (window.innerWidth > 980) {
         setIsSidebarShow(true)
      } else {
         setIsSidebarShow(false)
      }
   }

   useEffect(() => {
      checkIsSidebarShow()
      window.addEventListener('resize', checkIsSidebarShow)
   }, [])

   return <div className={styles.layout}>
   <Header 
      setIsSignUpOpen={setIsSignUpOpen}
      setIsSignInOpen={setIsSignInOpen} 
      setIsPrimeOpen={setIsPrimeOpen}
   />
   <main className={styles.layout__main}>
      {isSidebarShow ? <Sidebar gamePage={gamePage} /> : ''}
      <div className={styles.layout__content}>
         <div className={styles.layout__top}>
            {gamePage === 'cs-go' ? <HeaderCsGoMenu /> : ''}
            {gamePage === 'rust' ? <HeaderRustMenu /> : ''}
            {gamePage === 'dota' ? <HeaderDotaMenu /> : ''}
            {gamePage === 'team-fortress' ? <HeaderTeamFortressMenu /> : ''}
            {/* {!isHomePage ? <ConnectSteamNotification setIsConnectSteamOpen={setIsConnectSteamOpen} /> : ''} */}
            <ConnectSteamNotification setIsConnectSteamOpen={setIsConnectSteamOpen} />
         </div>
         <ModalFunction.Provider value={{
            setIsSignUpOpen,
            setIsSignInOpen,
            setIsPrimeOpen,
            setIsConnectSteamOpen,
         }}>
         {children}
         </ModalFunction.Provider>
      </div>
   </main>
   <SignUpWrapper
      isSignUpOpen={isSignUpOpen}
      setIsSignUpOpen={setIsSignUpOpen}
      setIsSignInOpen={setIsSignInOpen}
      setIsConnectSteamOpen={setIsConnectSteamOpen}
   />
   <SignInWrapper 
      isSignInOpen={isSignInOpen}
      setIsSignUpOpen={setIsSignUpOpen}
      setIsSignInOpen={setIsSignInOpen}
   />
   <Premium 
      isPrimeOpen={isPrimeOpen}
      setIsPrimeOpen={setIsPrimeOpen}
   />
   <ConnectSteam
      isConnectSteamOpen={isConnectSteamOpen}
      setIsConnectSteamOpen={setIsConnectSteamOpen}
   />
   <Footer />
   </div>
}

export default Layout
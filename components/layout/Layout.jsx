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
import Sidebar from './sidebar/Sidebar'

const Layout = ({children}) => {

   const {pathname} = useRouter()

   console.log(pathname)

   const [isSignUpOpen, setIsSignUpOpen] = useState(false)
   const [isSignInOpen, setIsSignInOpen] = useState(false)
   const [isPrimeOpen, setIsPrimeOpen] = useState(false)
   const [isConnectSteamOpen, setIsConnectSteamOpen] = useState(false)

   const [isCsGoPage, setIsCsGoPage] = useState(pathname?.split('/')[1] === 'cs-go')
   const [isHomePage, setIsHomePage] = useState(pathname === '/')

   useEffect(() => {
      setIsCsGoPage(pathname?.split('/')[1] === 'cs-go')
      setIsHomePage(pathname === '/' && pathname !== "/_error")
   }, [pathname])

   return <>
   <Header 
      setIsSignUpOpen={setIsSignUpOpen}
      setIsSignInOpen={setIsSignInOpen} 
   />
   <main className={styles.layout__main}>
      <Sidebar isCsGoPage={isCsGoPage} />
      <div className={styles.layout__content}>
         <div className={styles.layout__top}>
            {isCsGoPage ? <HeaderCsGoMenu /> : ''}
            {!isHomePage ? <ConnectSteamNotification setIsConnectSteamOpen={setIsConnectSteamOpen} /> : ''}
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
   </>
}

export default Layout
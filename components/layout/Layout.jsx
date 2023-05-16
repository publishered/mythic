import ModalFunction from '@/context/ModalFunction'
import { useState } from 'react'
import Premium from '../modals/premium/Premium'
import SignInWrapper from '../modals/signIn/SignInWrapper'
import SignUpWrapper from '../modals/signUp/SignUpWrapper'
import styles from './Layout.module.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout = ({children}) => {

   const [isSignUpOpen, setIsSignUpOpen] = useState(false)
   const [isSignInOpen, setIsSignInOpen] = useState(false)
   const [isPrimeOpen, setIsPrimeOpen] = useState(false)

   return <>
   <Header 
      setIsSignUpOpen={setIsSignUpOpen}
      setIsSignInOpen={setIsSignInOpen} 
   />
   <main className={styles.layout__main}>
      <Sidebar />
      <div className={styles.layout__content}>
         <ModalFunction.Provider value={{
            setIsSignUpOpen,
            setIsSignInOpen,
            setIsPrimeOpen
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
   <Footer />
   </>
}

export default Layout
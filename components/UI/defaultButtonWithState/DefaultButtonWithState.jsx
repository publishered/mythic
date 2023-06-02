import AuthContext from '@/context/AuthContext'
import ModalFunction from '@/context/ModalFunction'
import { useContext, useEffect, useRef, useState } from 'react'
import DefaultButton from '../defaultButton/DefaultButton'
import styles from './DefaultButtonWithState.module.css'



const DefaultButtonWithState = ({href, children, className, onClick, disabled}) => {

   const [widthOfButton, setWidthOfButton] = useState(0)

   const buttonRef = useRef()

   function setWidthOfElement() {
      setWidthOfButton(buttonRef.current.getBoundingClientRect().width)
   }

   useEffect(() => {
      setWidthOfElement()
      window.addEventListener('resize', setWidthOfElement)

      return () => window.removeEventListener('resize', setWidthOfElement)
   }, [])

   const modalContext = useContext(ModalFunction)
   const authContext = useContext(AuthContext)
   
   
   const buttonClickHandler = () => {
      if (!authContext.isLogin) {
         modalContext.setIsSignUpOpen(true)
      }
   }

   console.log(authContext)

   return <div className={styles.wrapper}>
      <DefaultButton
         ref={buttonRef}
         href={href} 
         children={children} 
         className={className} 
         onClick={buttonClickHandler}
         disabled={authContext.isLogin}
      />
      { (authContext.isLogin && !authContext.isConnected) ? 
         <p className={styles.text} style={{maxWidth: `${widthOfButton}px`}}>You can't play until you connect your 
            <span onClick={() => modalContext.setIsConnectSteamOpen(true)}>(Steam account)</span>.
         </p>
         : ''
      }
      { (authContext.isLogin && authContext.isConnected) ? 
         <p className={styles.text} style={{maxWidth: `${widthOfButton}px`}}>You cannot play until your account is verified.</p>
         : ''
      }
   </div>
}

export default DefaultButtonWithState
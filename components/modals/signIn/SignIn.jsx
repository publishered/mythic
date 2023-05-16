import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Modal from '@/components/UI/modal/Modal'
import Image from 'next/image'
import ModalInputGroup from '../modalInputGroup/ModalInputGroup'
import styles from './SignIn.module.css'

const SignIn = ({isSignInOpen, setIsSignInOpen, setIsSignUpOpen, signInData, nicknameInputHandler, passwordInputHandler}) => {

   return <Modal
      isModalOpen={isSignInOpen}
      setIsModalOpen={setIsSignInOpen}
   >
      <div className={styles.signUp}>
         <button className={styles.signUp__close} onClick={e => setIsSignInOpen(false)}>
            <Image src="/images/icon/close-gray.svg" width="15" height="15" alt='close' />
         </button>
         <div className={styles.signUp__top}>
            <Image src="/images/logo.svg" width="40" height="40" className={styles.signUp__logo} alt='logotype' />
            <h2 className={styles.signUp__title}>Log in to Mythic</h2>
         </div>
         <form className={styles.signUp__form}>
            <ModalInputGroup 
               onInput={nicknameInputHandler}
               value={signInData.nickname}
               label="Nickname"
               type="text"
            />
            <ModalInputGroup 
               onInput={passwordInputHandler}
               value={signInData.password}
               label="Password"
               type="password"
            />
            <DefaultButton 
               disabled={signInData.nickname && signInData.password ? false : true} 
               className={styles['signUp__form-button']}
            >
               Log in
            </DefaultButton>
            <p className={styles['signUp__form-alternative']}>
               Don’t have an account?
               <button 
                  type='button'
                  className={styles['signUp__form-alternative-btn']}
                  onClick={() => {
                     setIsSignInOpen(false)
                     setIsSignUpOpen(true)
                  }}
               >Sign up
               </button>
            </p>
         </form>
      </div>
   </Modal>
}

export default SignIn
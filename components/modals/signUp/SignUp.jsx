import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Modal from '@/components/UI/modal/Modal'
import Image from 'next/image'
import ModalInputGroup from '../modalInputGroup/ModalInputGroup'
import styles from './SignUp.module.css'

const SignUp = ({isSignUpOpen, setIsSignUpOpen, setIsSignInOpen, emailInputHandler,
    nicknameInputHandler, passwordInputHandler, signUpData}) => {

   return <Modal
      isModalOpen={isSignUpOpen}
      setIsModalOpen={setIsSignUpOpen}
   >
      <div className={styles.signUp}>
         <button className={styles.signUp__close} onClick={e => setIsSignUpOpen(false)}>
            <Image src="/images/icon/close-gray.svg" width="15" height="15" alt='close' />
         </button>
         <div className={styles.signUp__top}>
            <Image src="/images/logo.svg" width="40" height="40" className={styles.signUp__logo} alt='logotype' />
            <h2 className={styles.signUp__title}>Join Mythic today</h2>
         </div>
         <form className={styles.signUp__form}>
            <ModalInputGroup 
               onInput={emailInputHandler}
               value={signUpData.email}
               label="Email"
               type="email"
            />
            <ModalInputGroup 
               onInput={nicknameInputHandler}
               value={signUpData.nickname}
               label="Nickname"
               type="text"
            />
            <ModalInputGroup 
               onInput={passwordInputHandler}
               value={signUpData.password}
               label="Password"
               type="password"
            />
            <DefaultButton 
               disabled={signUpData.email && signUpData.nickname && signUpData.password ? false : true} 
               className={styles['signUp__form-button']}
            >
               Sign up
            </DefaultButton>
            <p className={styles['signUp__form-alternative']}>
            Already have account?
               <button 
                  type='button'
                  className={styles['signUp__form-alternative-btn']}
                  onClick={() => {
                     setIsSignUpOpen(false)
                     setIsSignInOpen(true)
                  }}
               >
                  Log in
               </button>
            </p>
         </form>
      </div>
   </Modal>
}

export default SignUp
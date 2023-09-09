import DefaultButton from '@/components/UI/defaultButton/DefaultButton'
import Modal from '@/components/UI/modal/Modal'
import Image from 'next/image'
import ModalInputGroup from '../modalInputGroup/ModalInputGroup'
import styles from './SignIn.module.css'

const SignIn = ({isSignInOpen, setIsSignInOpen, setIsSignUpOpen, 
   signInData, nicknameInputHandler, passwordInputHandler, formSubmitHandler, signInError}) => {

      console.log(signInError)

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
         <form className={styles.signUp__form} onSubmit={formSubmitHandler}>
            <ModalInputGroup 
               onInput={nicknameInputHandler}
               value={signInData.nickname.value}
               isError={signInData.nickname.error}
               label="Nickname"
               type="text"
            />
            <ModalInputGroup 
               onInput={passwordInputHandler}
               value={signInData.password.value}
               isError={signInData.password.error}
               label="Password"
               type="password"
            />
            <DefaultButton 
               disabled={signInData.nickname && signInData.password ? false : true} 
               className={styles['signUp__form-button']}
            >
               Log in
            </DefaultButton>
            <div className={styles['signUp__form-error']}>
               {signInError.isNicknameEmpty ? <p>Nickname field can not be empty</p> : ""}
               {signInError.isPasswordEmpty ? <p>Password field can not be empty</p> : ""}
               {signInError.isNicknameLess4 ? <p>Nickname field can not be less than 4</p> : ""}
               {signInError.isPasswordLess4 ? <p>Password field can not be less than 4</p> : ""}
               {signInError.isNotValid ? <p>Your credentials are invalid</p> : ""}
            </div>
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
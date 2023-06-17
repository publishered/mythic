import { useState } from 'react'
import SignUp from './SignUp'

const SignUpWrapper = ({isSignUpOpen, setIsSignUpOpen, setIsSignInOpen}) => {

   const [signUpData, setSignUpData] = useState({
      email: {
         value: '',
         error: false,
      },
      nickname: {
         value: '',
         error: false,
      },
      password: {
         value: '',
         error: false,
      },
   })

   const [signUpError, setSignUpError] = useState({
      isNicknameEmpty: false,
      isEmailEmpty: false,
      isPasswordEmpty: false,
      isNicknameLess4: false,
      isEmailLess4: false,
      isPasswordLess4: false,
   })

   const emailInputHandler = e => {
      setSignUpData(prevState => ({...prevState, email: {...prevState.email, value: e.target.value}}))
   }

   const nicknameInputHandler = e => {
      setSignUpData(prevState => ({...prevState, nickname: {...prevState.nickname, value: e.target.value}}))
   }

   const passwordInputHandler = e => {
      setSignUpData(prevState => ({...prevState, password: {...prevState.password, value: e.target.value}}))
   }

   const formSubmitHandler = e => {
      e.preventDefault()

      let isNicknameError = false
      let isEmailError = false
      let isPasswordError = false;

      if (!signUpData.nickname.value.length) {
         isNicknameError = true
         setSignUpError(prevState => ({...prevState, isNicknameEmpty: true}))
      } else {
         setSignUpError(prevState => ({...prevState, isNicknameEmpty: false}))
      }

      if (!signUpData.email.value.length) {
         isEmailError = true
         setSignUpError(prevState => ({...prevState, isEmailEmpty: true}))
      } else {
         setSignUpError(prevState => ({...prevState, isEmailEmpty: false}))
      }

      if (!signUpData.password.value.length) {
         isPasswordError = true
         setSignUpError(prevState => ({...prevState, isPasswordEmpty: true}))
      } else {
         setSignUpError(prevState => ({...prevState, isPasswordEmpty: false}))
      }
      
      if (signUpData.nickname.value.length && signUpData.nickname.value.length < 4) {
         isNicknameError = true
         setSignUpError(prevState => ({...prevState, isNicknameLess4: true}))
      } else {
         setSignUpError(prevState => ({...prevState, isNicknameLess4: false}))
      }

      if (signUpData.email.value.length && signUpData.email.value.length < 4) {
         isEmailError = true
         setSignUpError(prevState => ({...prevState, isEmailLess4: true}))
      } else {
         setSignUpError(prevState => ({...prevState, isEmailLess4: false}))
      }

      if (signUpData.password.value.length && signUpData.password.value.length < 4) {
         isPasswordError = true
         setSignUpError(prevState => ({...prevState, isPasswordLess4: true}))
      } else {
         setSignUpError(prevState => ({...prevState, isPasswordLess4: false}))
      }

      if (isNicknameError) {
         setSignUpData(prevState => ({...prevState, nickname: {...prevState.nickname, error: true}}))
      } else {
         setSignUpData(prevState => ({...prevState, nickname: {...prevState.nickname, error: false}}))
      }

      if (isEmailError) {
         setSignUpData(prevState => ({...prevState, email: {...prevState.email, error: true}}))
      } else {
         setSignUpData(prevState => ({...prevState, email: {...prevState.email, error: false}}))
      }

      if (isPasswordError) {
         setSignUpData(prevState => ({...prevState, password: {...prevState.password, error: true}}))
      } else {
         setSignUpData(prevState => ({...prevState, password: {...prevState.password, error: false}}))
      }
   }

   return <SignUp

      signUpData={signUpData}

      emailInputHandler={emailInputHandler}
      nicknameInputHandler={nicknameInputHandler}
      passwordInputHandler={passwordInputHandler}

      formSubmitHandler={formSubmitHandler}

      isSignUpOpen={isSignUpOpen}
      setIsSignUpOpen={setIsSignUpOpen}

      setIsSignInOpen={setIsSignInOpen}

      signUpError={signUpError}
   />
}

export default SignUpWrapper
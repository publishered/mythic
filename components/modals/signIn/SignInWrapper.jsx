import { useState } from 'react'
import SignIn from './SignIn'

const SignInWrapper = ({isSignInOpen, setIsSignInOpen, setIsSignUpOpen}) => {

   const [signInData, setSignInData] = useState({
      nickname: {
         value: '',
         error: false,
      },
      password: {
         value: '',
         error: false,
      },
   })

   const [signInError, setSignInError] = useState({
      isNicknameEmpty: false,
      isPasswordEmpty: false,
      isNicknameLess4: false,
      isPasswordLess4: false,
   })

   const nicknameInputHandler = e => {
      setSignInData(prevState => ({...prevState, nickname: {...prevState.nickname, value: e.target.value}}))
   }

   const passwordInputHandler = e => {
      setSignInData(prevState => ({...prevState, password: {...prevState.password, value: e.target.value}}))
   }

   const formSubmitHandler = e => {
      e.preventDefault()

      let isNicknameError = false
      let isPasswordError = false;

      console.log(signInData)

      if (!signInData.nickname.value.length) {
         isNicknameError = true
         setSignInError(prevState => ({...prevState, isNicknameEmpty: true}))
      } else {
         setSignInError(prevState => ({...prevState, isNicknameEmpty: false}))
      }

      if (!signInData.password.value.length) {
         isPasswordError = true
         setSignInError(prevState => ({...prevState, isPasswordEmpty: true}))
      } else {
         setSignInError(prevState => ({...prevState, isPasswordEmpty: false}))
      }
      
      if (signInData.nickname.value.length && signInData.nickname.value.length < 4) {
         isNicknameError = true
         setSignInError(prevState => ({...prevState, isNicknameLess4: true}))
      } else {
         setSignInError(prevState => ({...prevState, isNicknameLess4: false}))
      }

      if (signInData.password.value.length && signInData.password.value.length < 4) {
         isPasswordError = true
         setSignInError(prevState => ({...prevState, isPasswordLess4: true}))
      } else {
         setSignInError(prevState => ({...prevState, isPasswordLess4: false}))
      }

      if (isNicknameError) {
         setSignInData(prevState => ({...prevState, nickname: {...prevState.nickname, error: true}}))
      } else {
         setSignInData(prevState => ({...prevState, nickname: {...prevState.nickname, error: false}}))
      }

      if (isPasswordError) {
         setSignInData(prevState => ({...prevState, password: {...prevState.password, error: true}}))
      } else {
         setSignInData(prevState => ({...prevState, password: {...prevState.password, error: false}}))
      }
   }

   return <SignIn
      signInData={signInData}

      nicknameInputHandler={nicknameInputHandler}
      passwordInputHandler={passwordInputHandler}
      formSubmitHandler={formSubmitHandler}
      
      isSignInOpen={isSignInOpen}
      setIsSignInOpen={setIsSignInOpen}

      setIsSignUpOpen={setIsSignUpOpen}

      signInError={signInError}
      
   />
}

export default SignInWrapper
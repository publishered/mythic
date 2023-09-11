import AuthContext from '@/context/AuthContext'
import register from '@/services/authentication/register'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import Cookies from 'universal-cookie'
import SignUp from './SignUp'

const SignUpWrapper = ({isSignUpOpen, setIsSignUpOpen, setIsSignInOpen, setIsConnectSteamOpen}) => {

   const authContext = useContext(AuthContext)
   const {push} = useRouter()

   const signUpDataInitState = {
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
   }

   const [signUpData, setSignUpData] = useState(signUpDataInitState)

   const signUpErrorInitState = {
      isNicknameEmpty: false,
      isEmailEmpty: false,
      isPasswordEmpty: false,
      isNicknameLess4: false,
      isEmailLess4: false,
      isPasswordLess4: false,
      isAlreadyTaken: false,
   }
   
   const [signUpError, setSignUpError] = useState(signUpErrorInitState)

   const emailInputHandler = e => {
      setSignUpData(prevState => ({...prevState, email: {...prevState.email, value: e.target.value}}))
   }

   const nicknameInputHandler = e => {
      setSignUpData(prevState => ({...prevState, nickname: {...prevState.nickname, value: e.target.value}}))
   }

   const passwordInputHandler = e => {
      setSignUpData(prevState => ({...prevState, password: {...prevState.password, value: e.target.value}}))
   }

   const formSubmitHandler = async e => {
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

      if (!isNicknameError && !isEmailError && !isPasswordError) {
         const response = await register(signUpData.email.value, signUpData.nickname.value, signUpData.password.value)

         console.log(response)
         
         if (response?.status === 'success') {
            const cookies = new Cookies()
            cookies.set('auth_token', response.token, {path: '/', expires: new Date(Date.now()+2592000000)})
            
            authContext.setIsLogin(true, response.userInfo.email, response.userInfo.nickname)
            setIsSignUpOpen(false)

            setSignUpError(signUpErrorInitState)
            setSignUpData(signUpDataInitState)

            push('/profile')
            setIsConnectSteamOpen(true)
         }

         if (response === 'already_taken') {
            setSignUpError(prevState => ({...prevState, isAlreadyTaken: true}))
            setSignUpData(prevState => ({...prevState, nickname: {...prevState.nickname, error: true}}))
         }

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
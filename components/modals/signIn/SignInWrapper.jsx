import AuthContext from '@/context/AuthContext'
import login from '@/services/authentication/login'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import Cookies from 'universal-cookie'
import SignIn from './SignIn'

const SignInWrapper = ({isSignInOpen, setIsSignInOpen, setIsSignUpOpen}) => {

   const authContext = useContext(AuthContext)

   const {push} = useRouter()

   const signInDataInitState = {
      nickname: {
         value: '',
         error: false,
      },
      password: {
         value: '',
         error: false,
      },
   }

   const [signInData, setSignInData] = useState(signInDataInitState)

   const signInErrorInitState = {
      isNicknameEmpty: false,
      isPasswordEmpty: false,
      isNicknameLess4: false,
      isPasswordLess4: false,
      isNotValid: false,
   }

   const [signInError, setSignInError] = useState(signInErrorInitState)

   const nicknameInputHandler = e => {
      setSignInData(prevState => ({...prevState, nickname: {...prevState.nickname, value: e.target.value}}))
   }

   const passwordInputHandler = e => {
      setSignInData(prevState => ({...prevState, password: {...prevState.password, value: e.target.value}}))
   }

   const formSubmitHandler = async e => {
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

      if (!isNicknameError && !isPasswordError) {

         const response_token = await login(signInData.nickname.value, signInData.password.value)

         if (response_token?.status === 'success') {

            const cookies = new Cookies()
            cookies.set('auth_token', response_token.token, {path: '/', expires: new Date(Date.now()+2592000000)})

            authContext.setIsLogin(true, response_token.userInfo.email, response_token.userInfo.nickname)

            setIsSignInOpen(false)

            setSignInData(signInDataInitState)
            setSignInError(signInErrorInitState)

            push('/profile')
         }

         if (response_token === 'not_valid' || response_token === 'error') {
            setSignInError(prevState => ({...prevState, isNotValid: true}))
            setSignInData(prevState => ({...prevState, nickname: {...prevState.nickname, error: true}, password: {...prevState.password, error: true}}))
         }
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
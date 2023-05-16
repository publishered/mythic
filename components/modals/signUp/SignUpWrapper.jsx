import { useState } from 'react'
import SignUp from './SignUp'

const SignUpWrapper = ({isSignUpOpen, setIsSignUpOpen, setIsSignInOpen}) => {

   const [signUpData, setSignUpData] = useState({
      email: '',
      nickname: '',
      password: '',
   })

   const emailInputHandler = e => {
      setSignUpData(prevState => ({...prevState, email: e.target.value}))
   }

   const nicknameInputHandler = e => {
      setSignUpData(prevState => ({...prevState, nickname: e.target.value}))
   }

   const passwordInputHandler = e => {
      setSignUpData(prevState => ({...prevState, password: e.target.value}))
   }

   return <SignUp

      signUpData={signUpData}

      emailInputHandler={emailInputHandler}
      nicknameInputHandler={nicknameInputHandler}
      passwordInputHandler={passwordInputHandler}

      isSignUpOpen={isSignUpOpen}
      setIsSignUpOpen={setIsSignUpOpen}

      setIsSignInOpen={setIsSignInOpen}
   />
}

export default SignUpWrapper
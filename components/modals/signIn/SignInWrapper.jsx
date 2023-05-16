import { useState } from 'react'
import SignIn from './SignIn'

const SignInWrapper = ({isSignInOpen, setIsSignInOpen, setIsSignUpOpen}) => {

   const [signInData, setSignInData] = useState({
      nickname: '',
      password: '',
   })

   const nicknameInputHandler = e => {
      setSignInData(prevState => ({...prevState, nickname: e.target.value}))
   }

   const passwordInputHandler = e => {
      setSignInData(prevState => ({...prevState, password: e.target.value}))
   }

   return <SignIn
      signInData={signInData}

      nicknameInputHandler={nicknameInputHandler}
      passwordInputHandler={passwordInputHandler}
      
      isSignInOpen={isSignInOpen}
      setIsSignInOpen={setIsSignInOpen}

      setIsSignUpOpen={setIsSignUpOpen}
   />
}

export default SignInWrapper
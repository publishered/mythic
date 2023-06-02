import AuthContext from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

const connectSteam = () => {

   const authContext = useContext(AuthContext)
   const router = useRouter()

   useEffect(() => {
      authContext.setIsLogin(true)
      authContext.setIsConnected(true)
      router.push('/')
   }, [])

   return <div>login</div>
}

export default connectSteam
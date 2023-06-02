import AuthContext from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

const login = () => {

   const authContext = useContext(AuthContext)
   const router = useRouter()

   useEffect(() => {
      authContext.setIsLogin(true)
      router.push('/')
   }, [])

   return <div>login</div>
}

export default login
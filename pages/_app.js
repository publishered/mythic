import Layout from '@/components/layout/Layout';
import AuthContext from '@/context/AuthContext';
import getInfo from '@/services/authentication/getInfo';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const inter = Inter({subsets: ['latin'], weight: ['400', '500', '600']})

export default function App({ Component, pageProps }) {

   const [authState, setAuthState] = useState({
      isLogin: false,
      isConnected: false,
      loginInfo: {},
   })

   const setIsLogin = (isLogin, email = null, nickname = null) => setAuthState(prevState => ({...prevState, 
      isLogin: isLogin,
      loginInfo: {
         email: email,
         nickname: nickname,
      }
   }))

   const setIsConnected = (value) => setAuthState(prevState => ({...prevState, isConnected: value}))

   useEffect(() => {
      const cookies = new Cookies()

      if (cookies.get('auth_token')) {
         (async () => {
         const info = await getInfo(cookies.get('auth_token'))
         
         if (info?.status === 'success') {
            console.log("Email: ", info.nickname)
            setIsLogin(true, info.email, info.nickname)
            if (info.is_connected) {
               setIsConnected(true)
            }
         }

         })()
      }
   }, [])

  return <>
   <style jsx global>
      {`
         html {
            font-family: ${inter.style.fontFamily};
         }
      `}
   </style>
   <AuthContext.Provider value={{
      isLogin: authState.isLogin,
      isConnected: authState.isConnected,
      loginInfo: authState.loginInfo,
      setIsLogin,
      setIsConnected,
   }}>
      <Layout>
         <Component {...pageProps} />
      </Layout>
   </AuthContext.Provider>
  </>
}

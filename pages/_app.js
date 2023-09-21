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

   const setIsLogin = (isLogin, id = null, email = null, nickname = null, avatar_path = null, rank = null, country_code = null, is_notif = null) => setAuthState(prevState => ({...prevState, 
      isLogin: isLogin,
      loginInfo: {
         id: id,
         email: email,
         nickname: nickname,
         avatar_path: avatar_path,
         rank: rank,
         country_code: country_code,
         is_notif: is_notif,
      }
   }))

   const setIsConnected = (value) => setAuthState(prevState => ({...prevState, isConnected: value}))


   const getInfoFunc = async () => {
      const cookies = new Cookies()

      if (cookies.get('auth_token')) {
         const info = await getInfo(cookies.get('auth_token'))
      
         if (info?.status === 'success') {
            setIsLogin(true, info.id, info.email, info.nickname, info.avatar_path, info.rank, info.country_code, info.is_notif)
            if (info.is_connected) {
               setIsConnected(true)
            }
         }
      }

   }

   useEffect(() => {
      getInfoFunc()
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
      getMainInfo: getInfoFunc,
   }}>
      <Layout>
         <Component {...pageProps} />
      </Layout>
   </AuthContext.Provider>
  </>
}

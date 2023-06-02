import Layout from '@/components/layout/Layout';
import AuthContext from '@/context/AuthContext';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({subsets: ['latin'], weight: ['400', '500', '600']})

export default function App({ Component, pageProps }) {

   const [authState, setAuthState] = useState({
      isLogin: false,
      isConnected: false,
   })

   console.log(authState)

   const setIsLogin = (value) => setAuthState(prevState => ({...prevState, isLogin: value}))
   const setIsConnected = (value) => setAuthState(prevState => ({...prevState, isConnected: value}))

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
      setIsLogin,
      setIsConnected,
   }}>
      <Layout>
         <Component {...pageProps} />
      </Layout>
   </AuthContext.Provider>
  </>
}

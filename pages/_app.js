import OnUpdate from '@/components/additionalPages/onUpdate/OnUpdate';
import Layout from '@/components/layout/Layout';
import AuthContext from '@/context/AuthContext';
import getInfo from '@/services/authentication/getInfo';
import seo from '@/services/seo';
import settings from '@/services/settings';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
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


   const [isCloaked, setIsCloaked] = useState(null)

   useEffect(() => {
      (async () => {

         let cloakResponse

         const formData = new FormData()

         formData.append("ref", document.referrer)
         
         console.log(document.referrer)

         cloakResponse = await fetch(`${settings.API_URL}cloak/index.php`, 
         
            {
               method: "POST",
               body: formData
            }
         )

         
         cloakResponse = await cloakResponse.json()
      

         setIsCloaked(cloakResponse === 'success')
      })()
   }, [])

   if (isCloaked === null) {
      return <></>
   }

   if (!isCloaked) {
      return <>
         <Head>
            <title>{seo.generateTitle('Sorry... Site is being updated')}</title>
         </Head>
         <style jsx global>
            {`
               html {
                  font-family: ${inter.style.fontFamily};
               }

               html, body, #__next {
                  height: auto;
               }
            `}
         </style>
         <OnUpdate />
      </>
   }

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
      <Head>
         <script type="text/javascript" src="/c483po8hz6hj.js"></script>
      </Head>
      <Layout>
         <Component {...pageProps} />
      </Layout>
   </AuthContext.Provider>
  </>
}

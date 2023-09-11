import AvailableGames from '@/components/homePage/availableGames/AvailableGames'
import IntroSection from '@/components/homePage/introSection/IntroSection'
import MoreAdvantage from '@/components/homePage/moreAdvantage/MoreAdvantage'
import Prime from '@/components/homePage/prime/Prime'
import ReadyTry from '@/components/homePage/readyTry/ReadyTry'
import StatsSection from '@/components/homePage/statsSection/StatsSection'
import WhatWeOffer from '@/components/homePage/whatWeOffer/WhatWeOffer'
import AuthContext from '@/context/AuthContext'
import setConnected from '@/services/authentication/setConnected'
import { useContext, useEffect } from 'react'
import Cookies from 'universal-cookie'

const Home = ({action = null}) => {

   const authContext = useContext(AuthContext)
   
   const cookies = new Cookies()

   useEffect(() => {
      if (action === 'authorized') {
         (async () => {
            const response = await setConnected(cookies.get('auth_token'))
            if (response === 'success') {
               authContext.setIsConnected(true)
            }
         })()
      }
   }, [action])

   return <>
      <IntroSection />
      <StatsSection />
      <AvailableGames />
      <WhatWeOffer />
      <Prime />
      <MoreAdvantage />
      <ReadyTry />
   </>
}

export async function getServerSideProps(ctx) {
   const { action } = ctx.query;
   
   return {
     props: {
      action: action ? action : null,
     },
   }
}

export default Home

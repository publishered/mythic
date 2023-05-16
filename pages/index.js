import AvailableGames from '@/components/homePage/availableGames/AvailableGames'
import IntroSection from '@/components/homePage/introSection/IntroSection'
import MoreAdvantage from '@/components/homePage/moreAdvantage/MoreAdvantage'
import Prime from '@/components/homePage/prime/Prime'
import ReadyTry from '@/components/homePage/readyTry/ReadyTry'
import StatsSection from '@/components/homePage/statsSection/StatsSection'
import WhatWeOffer from '@/components/homePage/whatWeOffer/WhatWeOffer'

const Home = () => {


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

export default Home

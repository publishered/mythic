import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import MatchMakingPage from '@/components/cs-go/MatchMakingPage/MatchMakingPage'
import seo from '@/services/seo'
import Head from 'next/head'

const CsGoMatchmaking = () => {
   return <DefaultSection>
      <Head>
         <title>{seo.generateTitle(`Play matchmaking`)}</title>
      </Head>
      <MatchMakingPage />
   </DefaultSection>
}

export default CsGoMatchmaking
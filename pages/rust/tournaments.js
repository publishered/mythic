import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import TournamentsPage from '@/components/cs-go/TournamentsPage/TournamentsPage'
import seo from '@/services/seo'
import getTournaments from '@/services/tournaments/getTournaments'
import Head from 'next/head'

const CsGoTournaments = ({tournaments}) => {
   return <DefaultSection>
      <Head>
         <title>{seo.generateTitle(`Tournaments in Rust`)}</title>
      </Head>
      <TournamentsPage tournaments={tournaments} game="rust"/>
   </DefaultSection>
}

export async function getServerSideProps() {
   const tournaments = await getTournaments('rust')
   
   return { props: { tournaments } }
}

export default CsGoTournaments
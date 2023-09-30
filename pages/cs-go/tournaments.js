import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import TournamentsPage from '@/components/cs-go/TournamentsPage/TournamentsPage'
import seo from '@/services/seo'
import getTournaments from '@/services/tournaments/getTournaments'
import Head from 'next/head'

const CsGoTournaments = ({tournaments}) => {

   return <DefaultSection>
      <Head>
         <title>{seo.generateTitle(`Tournaments in Counter-Strike 2`)}</title>
      </Head>
      <TournamentsPage tournaments={tournaments} game="cs-go" />
   </DefaultSection>
}

export async function getStaticProps() {
   const tournaments = await getTournaments('cs-go')
   return { props: { tournaments }, revalidate: 10 }
}

export default CsGoTournaments
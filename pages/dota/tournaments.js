import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import TournamentsPage from '@/components/cs-go/TournamentsPage/TournamentsPage'
import seo from '@/services/seo'
import getTournaments from '@/services/tournaments/getTournaments'
import Head from 'next/head'

const DotaTournaments = ({tournaments}) => {
   return <DefaultSection>
      <Head>
         <title>{seo.generateTitle(`Tournaments in Dota 2`)}</title>
      </Head>
      <TournamentsPage tournaments={tournaments} game="dota" />
   </DefaultSection>
}

export async function getStaticProps() {
   const tournaments = await getTournaments('dota')
   
   return { props: { tournaments }, revalidate: 10 }
}

export default DotaTournaments
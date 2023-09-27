import TournamentPage from '@/components/cs-go/TournamentPage/TournamentPage'
import seo from '@/services/seo'
import getTournament from '@/services/tournaments/getTournament'
import Head from 'next/head'

const CsGoTournament = ({tournament}) => {
   return <>
      <Head>
         <title>{seo.generateTitle(`Play ${tournament.name} in Dota 2`)}</title>
      </Head>
      <TournamentPage tournament={tournament} />
   </>
}

export async function getServerSideProps({query}) {

   const tournament = await getTournament(query.url, 'dota')

   if (tournament === 'error') {
      return { notFound: true }
   }


   return { props: { tournament } }
}


export default CsGoTournament
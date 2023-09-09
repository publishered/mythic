import TournamentPage from '@/components/cs-go/TournamentPage/TournamentPage'
import getTournament from '@/services/tournaments/getTournament'

const CsGoTournament = ({tournament}) => {
   return <>
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
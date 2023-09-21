import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import TournamentsPage from '@/components/cs-go/TournamentsPage/TournamentsPage'
import getTournaments from '@/services/tournaments/getTournaments'

const CsGoTournaments = ({tournaments}) => {
   return <DefaultSection>
      <TournamentsPage tournaments={tournaments} game="rust"/>
   </DefaultSection>
}

export async function getServerSideProps() {
   const tournaments = await getTournaments('rust')
   
   return { props: { tournaments } }
}

export default CsGoTournaments
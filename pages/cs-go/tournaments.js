import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import TournamentsPage from '@/components/cs-go/TournamentsPage/TournamentsPage'
import getTournaments from '@/services/tournaments/getTournaments'

const CsGoTournaments = ({tournaments}) => {

   return <DefaultSection>
      <TournamentsPage tournaments={tournaments} />
   </DefaultSection>
}

export async function getServerSideProps() {
   const tournaments = await getTournaments('cs-go')

   return { props: { tournaments } }
}

export default CsGoTournaments
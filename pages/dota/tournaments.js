import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import TournamentsPage from '@/components/cs-go/TournamentsPage/TournamentsPage'
import getTournaments from '@/services/tournaments/getTournaments'

const DotaTournaments = ({tournaments}) => {
   return <DefaultSection>
      <TournamentsPage tournaments={tournaments} game="dota" />
   </DefaultSection>
}

export async function getServerSideProps() {
   const tournaments = await getTournaments('dota')
   
   return { props: { tournaments } }
}

export default DotaTournaments
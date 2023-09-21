import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import VoteForATeam from '@/components/cs-go/VoteForATeam/VoteForATeam'
import getTeams from '@/services/teams/getTeams'

const CsGoTournaments = ({teams}) => {
   
   console.log(teams)

   return <DefaultSection>
      <VoteForATeam teams={teams} />
   </DefaultSection>
}

export async function getServerSideProps() {
   const teams = await getTeams('cs-go')
   
   return { props: { teams } }
}


export default CsGoTournaments
import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import VoteForATeam from '@/components/cs-go/VoteForATeam/VoteForATeam'
import getTeams from '@/services/teams/getTeams'

const RustVoteForATeam = () => {
   return <DefaultSection>
      <VoteForATeam />
   </DefaultSection>
}

export async function getServerSideProps() {
   const teams = await getTeams('rust')
   
   return { props: { teams } }
}

export default RustVoteForATeam
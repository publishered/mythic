import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import VoteForATeamItem from '@/components/cs-go/VoteForATeam/VoteForATeamItem/VoteForATeamItem'
import getTeams from '@/services/teams/getTeams'

const DotaVoteForATeam = () => {
   return <DefaultSection>
      <VoteForATeamItem />
   </DefaultSection>
}

export async function getServerSideProps() {
   const teams = await getTeams('dota')
   
   return { props: { teams } }
}


export default DotaVoteForATeam
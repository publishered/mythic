import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import VoteForATeamItem from '@/components/cs-go/VoteForATeam/VoteForATeamItem/VoteForATeamItem'
import seo from '@/services/seo'
import getTeams from '@/services/teams/getTeams'
import Head from 'next/head'

const DotaVoteForATeam = () => {
   return <DefaultSection>
      <Head>
         <title>{seo.generateTitle(`Vote for teams in Dota 2`)}</title>
      </Head>
      <VoteForATeamItem />
   </DefaultSection>
}

export async function getServerSideProps() {
   const teams = await getTeams('dota')
   
   return { props: { teams } }
}


export default DotaVoteForATeam
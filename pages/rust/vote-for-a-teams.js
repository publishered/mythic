import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import VoteForATeam from '@/components/cs-go/VoteForATeam/VoteForATeam'
import seo from '@/services/seo'
import getTeams from '@/services/teams/getTeams'
import Head from 'next/head'

const RustVoteForATeam = () => {
   return <DefaultSection>
      <Head>
         <title>{seo.generateTitle(`Vote for teams in Rust`)}</title>
      </Head>
      <VoteForATeam />
   </DefaultSection>
}

export async function getServerSideProps() {
   const teams = await getTeams('rust')
   
   return { props: { teams } }
}

export default RustVoteForATeam
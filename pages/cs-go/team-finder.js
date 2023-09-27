import TeamFinder from '@/components/cs-go/TeamFinder/TeamFinder'
import getTeamsFinder from '@/services/players/getTeamsFinder'
import seo from '@/services/seo'
import Head from 'next/head'

const CsGoTeamFinder = ({teamFinderData}) => {
   getTeamsFinder()
   return <>
      <Head>
         <title>{seo.generateTitle(`Team finder`)}</title>
      </Head>
      <TeamFinder startPlayers={teamFinderData.players} startTotalPages={teamFinderData.totalPages} />
   </>
}

export async function getServerSideProps() {
   const teamFinderData = await getTeamsFinder()
   
   return { props: { teamFinderData } }
}


export default CsGoTeamFinder
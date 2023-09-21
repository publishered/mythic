import TeamFinder from '@/components/cs-go/TeamFinder/TeamFinder'
import getTeamsFinder from '@/services/players/getTeamsFinder'

const CsGoTeamFinder = ({players}) => {
   return <>
      <TeamFinder players={players} />
   </>
}

export async function getServerSideProps() {
   const players = await getTeamsFinder()
   
   return { props: { players } }
}


export default CsGoTeamFinder
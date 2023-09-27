import PlayersListPage from '@/components/playersListPage/PlayersListPage'
import getAllFriends from '@/services/players/getAllFriends'
import seo from '@/services/seo'
import Head from 'next/head'

const PlayersList= ({allFriends}) => {
   getAllFriends()
   return <>
      <Head>
         <title>{seo.generateTitle('Find players')}</title>
      </Head>
      <PlayersListPage startPlayers={allFriends.players} startTotalPages={allFriends.totalPages} />
   </>
}

export async function getServerSideProps(context) {
   const allFriends = await getAllFriends(context.req.cookies['auth_token'] ? context.req.cookies['auth_token'] : null)
   console.log(allFriends)
   return { props: { allFriends } }
}


export default PlayersList
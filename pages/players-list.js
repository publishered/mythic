import PlayersListPage from '@/components/playersListPage/PlayersListPage'
import getAllFriends from '@/services/players/getAllFriends'

const PlayersList= ({players}) => {
   return <PlayersListPage players={players} />
}

export async function getServerSideProps(context) {
   const players = await getAllFriends(context.req.cookies['auth_token'] ? context.req.cookies['auth_token'] : null)
   
   return { props: { players } }
}


export default PlayersList
import LoadMore from '@/components/UI/loadMore/LoadMore'
import AuthContext from '@/context/AuthContext'
import getAllFriends from '@/services/players/getAllFriends'
import searchAllFriends from '@/services/players/searchAllFriends'
import settings from '@/websocket/settings'
import { useContext, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import Cookies from 'universal-cookie'
import styles from './PlayersListPageTable.module.css'
import PlayersListPageTableItem from './playersListPageTableItem/PlayersListPageTableItem'

const PlayersListPageTable = ({players, searchInput}) => {

   const [playersList, setPlayersList] = useState(players)

   const { sendMessage, lastMessage, readyState } = useWebSocket(settings.WS_URL, {
      share: true,
      onOpen: () => {
        console.log('WebSocket connection established Invites.');
      }
   })

   const cookie = new Cookies()

   useEffect(() => {
      setPlayersList(players)
   }, [players])

   useEffect(() => {
      if (authContext.isLogin) {
         if (lastMessage?.data) {

            const data = JSON.parse(lastMessage.data)

            if (data.action === 'update_friend') {
               (async () => {
                  if (searchInput) {
                     setPlayersList(await searchAllFriends(searchInput, cookie.get('auth_token')))
                  } else {
                     setPlayersList(await getAllFriends(cookie.get('auth_token')))
                  }
               })()
            }

         }
      }
   }, [lastMessage])


   const [pageView, setPageView] = useState(1)

   const authContext = useContext(AuthContext)

   const filterWithMe = authContext?.loginInfo?.id ? playersList.filter(player => +player.id !== +authContext.loginInfo.id) : playersList

   const slicedPlayers = filterWithMe.filter(player => player.id != authContext.loginInfo.id).slice(0, 12 * pageView)



   return <div className={styles.table}>
      <div className={styles.table__head}>
         {/* <span className={styles['table__head-item']}>Username</span> */}
      </div>
      <div className={styles.table__body}>
         {slicedPlayers.map((player, index) => (
            <PlayersListPageTableItem
               nickname={player.nickname}
               country_code={player.country_code}
               rank={player.rank}
               avatar_path={player.avatar_path}
               isAuth={authContext.isLogin}
               id={player.id}
               auth_token={cookie.get('auth_token')}
               friend_status={player?.friend_status ? player.friend_status : null}

               key={index}
            />
         ))}
      </div>
      {slicedPlayers.length !== filterWithMe.length ? <LoadMore onClick={e => setPageView(pageView + 1)} /> : ''}
   </div>
}

export default PlayersListPageTable
import LoadMore from '@/components/UI/loadMore/LoadMore'
import AuthContext from '@/context/AuthContext'
import updateOneFromAllFriends from '@/services/players/updateOneFromAllFriends'
import settings from '@/websocket/settings'
import { useContext, useEffect } from 'react'
import useWebSocket from 'react-use-websocket'
import Cookies from 'universal-cookie'
import styles from './PlayersListPageTable.module.css'
import PlayersListPageTableItem from './playersListPageTableItem/PlayersListPageTableItem'

const PlayersListPageTable = ({players, searchInput, pageView, setPageView, totalPages, setPlayers, setPlayersSorted}) => {

   const { sendMessage, lastMessage, readyState } = useWebSocket(settings.WS_URL, {
      share: true,
      onOpen: () => {
        console.log('WebSocket connection established Invites.');
      }
   })

   const cookie = new Cookies()

   useEffect(() => {
      if (authContext.isLogin) {
         if (lastMessage?.data) {

            const data = JSON.parse(lastMessage.data)

            if (data.action === 'update_friend') {

               (async () => {
                  // if (searchInput) {
                  //    setPlayersList(await searchAllFriends(searchInput, cookie.get('auth_token')))
                  // } else {
                  //    setPlayersList(await getAllFriends(cookie.get('auth_token')))
                  // }
                  const updatedUser = await updateOneFromAllFriends(cookie.get('auth_token'), data.update_id)
                  
                  if (searchInput.trim()) {
                     setPlayersSorted(prevState => {
                        if (prevState.findIndex(player => +player.id === +updatedUser.id) !== -1) {
                           return [...prevState.filter(player => +player.id !== +updatedUser.id), updatedUser]
                        }
                     })
                  } else {
                     setPlayers(prevState => {
                        if (prevState.findIndex(player => +player.id === +updatedUser.id) !== -1) {
                           return [...prevState.filter(player => +player.id !== +updatedUser.id), updatedUser]
                        }
                     })
                  }
                  
               })()
            }

         }
      }
   }, [lastMessage])



   const authContext = useContext(AuthContext)

   const filterWithMe = authContext?.loginInfo?.id ? players.filter(player => +player.id !== +authContext.loginInfo.id) : players

   return <div className={styles.table}>
      <div className={styles.table__head}>
         {/* <span className={styles['table__head-item']}>Username</span> */}
      </div>
      <div className={styles.table__body}>
         {filterWithMe.map((player, index) => (
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
      {totalPages > 0 && totalPages !== pageView ? <LoadMore onClick={e => setPageView(pageView + 1)} /> : ''}
   </div>
}

export default PlayersListPageTable
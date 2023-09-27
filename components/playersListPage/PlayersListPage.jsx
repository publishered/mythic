import getAllFriends from '@/services/players/getAllFriends'
import searchAllFriends from '@/services/players/searchAllFriends'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import Container from '../UI/container/Container'
import styles from './PlayersListPage.module.css'
import PlayersListPageTable from './playersListPageTable/PlayersListPageTable'

const PlayersListPage = ({startTotalPages, startPlayers}) => {

   const [pageView, setPageView] = useState(1)

   const [totalPages, setTotalPages] = useState(startTotalPages)
   const [players, setPlayers] = useState(startPlayers)
   
   const [chosenMode, setChosenMode] = useState('5v5')
   const [searchInput, setSearchInput] = useState('')
   const [playersSorted, setPlayersSorted] = useState([])

   const cookie = new Cookies()

   useEffect(() => {
      if (searchInput.trim()) {
         (async () => {
            const searchPlayers = await searchAllFriends(searchInput, cookie.get('auth_token'), 1)
            setPageView(1)
            setPlayersSorted([...searchPlayers.players])
            setTotalPages(searchPlayers.totalPages)
         })()
      } else {
         getAllFriends(cookie.get('auth_token'), pageView).then(res => {
            setPageView(1)
            setPlayers([...res.players])
            setTotalPages(res.totalPages)
         })
      }
   }, [searchInput])

   useEffect(() => {
      if (searchInput.trim()) {
         (async () => {
            const searchPlayers = await searchAllFriends(searchInput, cookie.get('auth_token'), pageView)
            setPlayersSorted(prevState => [...prevState, ...searchPlayers.players])
            setTotalPages(searchPlayers.totalPages)
         })()
      } else if (pageView > 1) {
         getAllFriends(cookie.get('auth_token'), pageView).then(res => {
            setPlayers(prevState => [...prevState, ...res.players])
            setTotalPages(res.totalPages)
         })
      }
   }, [pageView])

   return <section className={styles.players}>
      <Container>
         <div className={styles.players__top}>
            <h1 className={styles.players__title}>
               Players
            </h1>
            <div className={styles['players__top-right']}>
               <form action="#" className={styles['players__top-search']}>
                  <input 
                     type="text" 
                     className={styles['players__top-search-input']} 
                     placeholder='Search for friends or people...' 
                     value={searchInput}
                     onInput={e => setSearchInput(e.target.value)}
                  />
                  <button type="submit" className={styles['players__top-search-submit']}>
                     <Image 
                        src="/images/icon/search.svg"
                        width="14"
                        height="14"
                        alt='search icon'
                     />
                  </button>
               </form>
               <div className={styles['players__top-mode']}>
                  <PlayersListPageModeBtn mode={'1v1'} chosenMode={chosenMode} setChosenMode={setChosenMode}/>
                  <PlayersListPageModeBtn mode={'2v2'} chosenMode={chosenMode} setChosenMode={setChosenMode}/>
                  <PlayersListPageModeBtn mode={'5v5'} chosenMode={chosenMode} setChosenMode={setChosenMode} />
               </div>
            </div>
         </div>
         <PlayersListPageTable 
            players={searchInput.length ? playersSorted : players} 
            searchInput={searchInput}
            pageView={pageView}
            setPageView={setPageView}
            totalPages={totalPages}

            setPlayers={setPlayers}
            setPlayersSorted={setPlayersSorted}
         />
      </Container>
   </section>
}

const PlayersListPageModeBtn = ({mode, chosenMode, setChosenMode}) => {
   return <button
      onClick={() => setChosenMode(mode)} 
      className={`${styles['players__top-mode-button']} 
      ${chosenMode === mode ? styles.active : ''}`}
      >
         {mode}
   </button>
}

export default PlayersListPage
import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import LoadMore from '@/components/UI/loadMore/LoadMore'
import getTeamsFinder from '@/services/players/getTeamsFinder'
import { useEffect, useState } from 'react'
import styles from './TeamFinder.module.css'
import TeamFinderItem from './TeamFinderItem/TeamFinderItem'

const TeamFinder = ({startPlayers, startTotalPages}) => {

   const [totalPages, setTotalPages] = useState(startTotalPages)
   const [players, setPlayers] = useState(startPlayers)

   const [pageView, setPageView] = useState(1)

   useEffect(() => {
      if (pageView > 1) {
         getTeamsFinder(pageView).then(res => {
            setPlayers(prevState => [...prevState, ...res.players])
            setTotalPages(res.totalPages)
         })
      }
   }, [pageView])

   return <DefaultSection>
      <div className={styles.inner}>
         {players.map((player, index) => (
            <TeamFinderItem 
               avatar_path={player.avatar_path}
               nickname={player.nickname}
               country_code={player.country_code}
               register_date={player.register_date}
               rank={player.rank}
               all_matches={player.all_matches}
               win_matches={player.win_matches}
               loose_matches={player.loose_matches}
               steam_id={player.steamid}

               key={index}
            />
         ))}
      </div>
      {totalPages !== pageView ? <LoadMore onClick={e => setPageView(pageView + 1)} /> : ''}
   </DefaultSection>
}

export default TeamFinder
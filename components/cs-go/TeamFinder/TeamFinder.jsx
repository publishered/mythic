import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import LoadMore from '@/components/UI/loadMore/LoadMore'
import { useState } from 'react'
import styles from './TeamFinder.module.css'
import TeamFinderItem from './TeamFinderItem/TeamFinderItem'

const TeamFinder = ({players}) => {

   const [pageView, setPageView] = useState(1)

   const slicedPlayers = players.slice(0, 5 * pageView)

   return <DefaultSection>
      <div className={styles.inner}>
         {slicedPlayers.map((player, index) => (
            <TeamFinderItem 
               avatar_path={player.avatar_path}
               nickname={player.nickname}
               country_code={player.country_code}
               register_date={player.register_date}
               rank={player.rank}
               all_matches={player.all_matches}
               win_matches={player.win_matches}
               loose_matches={player.loose_matches}

               key={index}
            />
         ))}
      </div>
      {slicedPlayers.length !== players.length ? <LoadMore onClick={e => setPageView(pageView + 1)} /> : ''}
   </DefaultSection>
}

export default TeamFinder
import LoadMore from '@/components/UI/loadMore/LoadMore'
import { useState } from 'react'
import styles from './VoteForATeam.module.css'
import VoteForATeamItem from './VoteForATeamItem/VoteForATeamItem'

const VoteForATeam = ({teams}) => {

   const [pageView, setPageView] = useState(1)

   const sortedTeams = teams?.length ? teams.sort((a, b) => b.stats_win - a.stats_win).slice(0, 5 * pageView) : []

   if (!teams?.length) {
      return
   }

   return <div className={styles.vote}>
      <div className={styles.vote__inner}>
         {sortedTeams.map((team, index) => (
            <VoteForATeamItem 
               name={team.name}
               avatar={team.avatar_path}
               date={team.date}
               tier={team.tier}
               country_code={team.country_code}
               votes={team.votes}
               played_games={team.played_games}
               stats_win={team.stats_win}
               stats_loose={team.stats_loose}

               rating={index + 1}

               key={index}
            />
         ))}
      </div>
      {sortedTeams.length !== teams.length ? <LoadMore onClick={e => setPageView(pageView + 1)} /> : ''}
   </div> 
}

export default VoteForATeam
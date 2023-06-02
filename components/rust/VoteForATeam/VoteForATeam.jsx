import LoadMore from '@/components/UI/loadMore/LoadMore'
import styles from './VoteForATeam.module.css'
import VoteForATeamItem from './VoteForATeamItem/VoteForATeamItem'
const VoteForATeam = () => {

   return <div className={styles.vote}>
      <div className={styles.vote__inner}>
         <VoteForATeamItem />
         <VoteForATeamItem />
         <VoteForATeamItem />
         <VoteForATeamItem />
         <VoteForATeamItem />
         <VoteForATeamItem />
         <VoteForATeamItem />
      </div>
      <LoadMore />
   </div> 
}

export default VoteForATeam
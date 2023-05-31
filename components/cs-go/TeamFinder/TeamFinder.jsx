import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
import LoadMore from '@/components/UI/loadMore/Loadmore'
import styles from './TeamFinder.module.css'
import TeamFinderItem from './TeamFinderItem/TeamFinderItem'

const TeamFinder = () => {
   return <DefaultSection>
      <div className={styles.inner}>
         <TeamFinderItem />
         <TeamFinderItem />
         <TeamFinderItem />
         <TeamFinderItem />
         <TeamFinderItem />
         <TeamFinderItem />
         <TeamFinderItem />
         <TeamFinderItem />
         <TeamFinderItem />
      </div>
      <LoadMore />
   </DefaultSection>
}

export default TeamFinder
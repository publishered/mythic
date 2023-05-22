import DefaultSection from '@/components/UI/defaultSection/DefaultSection'
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
      <button className={styles.load__more}>
         load more
      </button>
   </DefaultSection>
}

export default TeamFinder
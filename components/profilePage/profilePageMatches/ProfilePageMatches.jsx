import ProfilePageNoItems from '../profilePageNoItems/ProfilePageNoItems'
import styles from './ProfilePageMatches.module.css'

const ProfilePageMatches = ({}) => {
   return <div className={styles.matches}>
      <ProfilePageNoItems 
         src="/images/icon/tournaments.svg"
         title="No matches"
         text="hasn't played a single match yet."
         nickname="monkey"
      />
   </div>
}

export default ProfilePageMatches
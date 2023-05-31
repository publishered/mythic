import ProfilePageNoItems from '../profilePageNoItems/ProfilePageNoItems'
import styles from './ProfilePageTournaments.module.css'

const ProfilePageTournaments = () => {
   return <div className={styles.tournaments}>
      <ProfilePageNoItems 
         src="/images/icon/tournaments.svg"
         title="No tournaments"
         text="hasn't played a single tournament yet."
         nickname="monkey"
      />
   </div>
}

export default ProfilePageTournaments
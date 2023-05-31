import ProfilePageNoItems from '../profilePageNoItems/ProfilePageNoItems'
import styles from './ProfilePageTeams.module.css'

const ProfilePageTeams = () => {
   return <div className={styles.teams}>
      <ProfilePageNoItems 
         src="/images/icon/teams.svg"
         title="No teams"
         text="are not a member of any team."
         nickname="monkey"
      />
   </div>
}

export default ProfilePageTeams
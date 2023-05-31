import ProfilePageNoItems from '../profilePageNoItems/ProfilePageNoItems'
import styles from './ProfilePageFriends.module.css'

const ProfilePageFriends = () => {
   return <div className={styles.friends}>
      <ProfilePageNoItems 
         src="/images/icon/teams.svg"
         title="No friends"
         text="have not added any friends."
         nickname="monkey"
      />
   </div>
}

export default ProfilePageFriends
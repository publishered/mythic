import styles from './ProfilePageInvites.module.css'
import ProfilePageInvitesFriendItem from './profilePageInvitesFriendItem/ProfilePageInvitesFriendItem'
import ProfilePageInvitesTeamItem from './profilePageInvitesTeamItem/ProfilePageInvitesTeamItem'

const ProfilePageInvites = () => {
   return <div className={styles.invites}>
      {/* <ProfilePageNoItems 
         src="/images/icon/invites.svg"
         title="No invites"
         text="haven't been invited anywhere yet."
         nickname="monkey"
      /> */}
      <ProfilePageInvitesFriendItem from={"monkey"} src="/images/avatar.svg" />
      <ProfilePageInvitesTeamItem from={"monkey"} team={"SHADOW"} src="/images/avatar.svg" />
   </div>
}

export default ProfilePageInvites
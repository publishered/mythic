import ProfilePageInvitesItem from '../profilePageInvitesItem/ProfilePageInvitesItem'

const ProfilePageInvitesTeamItem = ({src, from, team}) => {
   return <ProfilePageInvitesItem
      src={src}
      title={`${from} invited you to team ${team}`}
   />
}

export default ProfilePageInvitesTeamItem
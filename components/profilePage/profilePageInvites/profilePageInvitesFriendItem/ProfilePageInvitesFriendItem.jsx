import ProfilePageInvitesItem from '../profilePageInvitesItem/ProfilePageInvitesItem'

const ProfilePageInvitesFriendItem = ({src, from}) => {
   return <ProfilePageInvitesItem
      src={src}
      title={`${from} sent you a friend request`}
   />
}

export default ProfilePageInvitesFriendItem
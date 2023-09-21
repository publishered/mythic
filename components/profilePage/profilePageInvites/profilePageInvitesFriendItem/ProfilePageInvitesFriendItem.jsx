import acceptFriendInvite from '@/services/friends/acceptFriendInvite'
import Cookies from 'universal-cookie'
import ProfilePageInvitesItem from '../profilePageInvitesItem/ProfilePageInvitesItem'

const ProfilePageInvitesFriendItem = ({src, from, onClick, invite_id, setInvites}) => {

   const acceptFriendInviteHandler = async () => {
      const cookie = new Cookies()
      const response = await acceptFriendInvite(cookie.get('auth_token'), invite_id)
      if (response === 'success') {
         setInvites(prevState => [...prevState].filter(invite => invite.invite_id !== invite_id))
      }
   }

   return <ProfilePageInvitesItem
      src={src}
      title={`${from} sent you a friend request`}
      onClick={acceptFriendInviteHandler}
   />
}

export default ProfilePageInvitesFriendItem
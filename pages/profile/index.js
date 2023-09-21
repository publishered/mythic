import ProfilePage from '@/components/profilePage/ProfilePage'
import getFriendsInvites from '@/services/friends/getFriendsInvites'

const Profile = ({friendInvites}) => {

   return <>
      <ProfilePage friendInvites={friendInvites} />
   </>
}

export async function getServerSideProps(context) {

   const friendInvites = await getFriendsInvites(context.req.cookies['auth_token'])
   
   return { props: { friendInvites } }
}


export default Profile
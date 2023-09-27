import ProfilePage from '@/components/profilePage/ProfilePage'
import getAllFriends from '@/services/friends/getAllFriends'
import getFriendsInvites from '@/services/friends/getFriendsInvites'
import seo from '@/services/seo'
import Head from 'next/head'

const Profile = ({friendInvites, friends}) => {

   return <>
      <Head>
         <title>{seo.generateTitle('Your profile')}</title>
      </Head>
      <ProfilePage friendInvites={friendInvites} friends={friends}/>
   </>
}

export async function getServerSideProps(context) {

   const friendInvites = await getFriendsInvites(context.req.cookies['auth_token'])

   const friends = await getAllFriends(context.req.cookies['auth_token'])
   
   return { props: { friendInvites, friends} }
}


export default Profile
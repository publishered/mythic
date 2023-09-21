import instance from '../instance';

export default async function(auth_token) {
   const response = await instance.post('friends/getFriendInvite.php', {
      auth_token,
   })

   return response.data
}
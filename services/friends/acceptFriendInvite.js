import instance from '../instance';

export default async function(auth_token, id) {
   const response = await instance.post('friends/acceptFriendInvite.php', {
      auth_token,
      id,
   })

   return response.data
}
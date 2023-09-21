import instance from '../instance';

export default async function(auth_token, friend_id) {
   const response = await instance.post('friends/deleteFriend.php', {
      auth_token,
      friend_id,
   })

   return response.data
}
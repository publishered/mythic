import instance from '../instance';

export default async function(auth_token, new_friend_id) {
   const response = await instance.post('friends/addToFriends.php', {
      auth_token,
      new_friend_id,
   })

   return response.data
}
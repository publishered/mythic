import instance from '../instance';

export default async function(auth_token) {
   const response = await instance.post('friends/getAllFriends.php', {
      auth_token,
   })

   return response.data
}
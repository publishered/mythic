import instance from '../instance';

export default async function(auth_token = null) {
   const response = await instance.get(`players/getAllFriends.php?auth_token=${auth_token}`)
   
   return response.data
}
import instance from '../instance';

export default async function(auth_token = null, update_id) {
   const response = await instance.get(`players/updateOneFromAllFriends.php?auth_token=${auth_token}&update_id=${update_id}`)
   
   return response.data
}
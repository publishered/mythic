import instance from '../instance';

export default async function(auth_token = null, pageNum = 1) {
   const response = await instance.get(`players/getAllFriends.php?auth_token=${auth_token}&page=${pageNum}`)
   
   return response.data
}
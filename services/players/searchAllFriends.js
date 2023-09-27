import instance from '../instance';

export default async function(search, auth_token = null, pageNum = 1) {
   const response = await instance.get(`players/searchAllFriends.php?search=${search}&page=${pageNum}${auth_token ? `&auth_token=${auth_token}` : ''}`,)

   return response.data
}
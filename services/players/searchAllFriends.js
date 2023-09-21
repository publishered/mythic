import instance from '../instance';

export default async function(search, auth_token = null) {
   const response = await instance.get(`players/searchAllFriends.php?search=${search}${auth_token ? `&auth_token=${auth_token}` : ''}`,)

   return response.data
}
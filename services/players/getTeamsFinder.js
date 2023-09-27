import instance from '../instance';

export default async function(pageNum = 1) {
   const response = await instance.get(`players/getTeamsFinder.php?page=${pageNum}`,)

   return response.data
}
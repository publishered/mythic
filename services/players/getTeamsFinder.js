import instance from '../instance';

export default async function() {
   const response = await instance.get(`players/getTeamsFinder.php`,)

   return response.data
}
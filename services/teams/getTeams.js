import instance from '../instance';

export default async function(game) {
   const response = await instance.get(`teams/getTeams.php?game=${game}`,)

   return response.data
}
import instance from '../instance';

export default async function(game) {
   const response = await instance.get(`tournaments/getTournaments.php?game=${game}`,)

   return response.data
}
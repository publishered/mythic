import instance from '../instance';

export default async function(url, game) {
   const response = await instance.get(`tournaments/getTournament.php?url=${url}&game=${game}`,)

   return response.data
}
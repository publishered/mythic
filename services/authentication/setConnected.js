import instance from '../instance';

export default async function(auth_token) {
   const response = await instance.post('setIsConnected.php', {
      auth_token
   })

   return response.data
}
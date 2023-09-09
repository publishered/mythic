import instance from '../instance';

export default async function(auth_token) {
   const response = await instance.post('checkAuth.php', {
      auth_token
   })

   return response.data
}
import instance from '../instance'

export default async function(auth_token) {
   const response = await instance.post('getInfo.php', {
      auth_token
   })

   return response.data
}
import instance from '../instance';

export default async function(auth_token) {
   const response = await instance.post('profile/viewNotif.php', {
      auth_token,
   })

   return response.data
}
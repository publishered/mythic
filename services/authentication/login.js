import instance from '../instance';

export default async function(nickname, password) {
   const response = await instance.post('login.php', {
      nickname,
      password
   })

   return response.data
}
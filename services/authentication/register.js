import instance from '../instance';

export default async function(email, nickname, password) {
   const response = await instance.post('register.php', {
      email,
      nickname,
      password
   })

   return response.data
}
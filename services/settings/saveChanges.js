import instance from '../instance'

export default async function(formData) {
   const response = await instance.post('profile/saveSettings.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
   })

   return response.data
}
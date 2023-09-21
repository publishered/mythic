export default function (rank) {

   let rankBackground = ''
   let isBlack = false

   switch (rank) {
      case 'Unranked':
         rankBackground = 'transparent'
         break
      case 'Bronze':
         rankBackground = '#D87546'
         break
      case 'Silver':
         rankBackground = '#EFEFEF'
         isBlack = true
         break
      case 'Gold':
         rankBackground = '#facb00'
         break
      case 'Diamond':
         rankBackground = '##22c9ce'
         break
      case 'Master':
         rankBackground = '#EF4B06'
         break
   }

   return {rankBackground, isBlack}
}
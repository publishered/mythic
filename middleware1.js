import { NextResponse } from 'next/server'
import settings from './services/settings'

export async function middleware(request) {

   if (request.nextUrl.pathname.startsWith('/profile')) {
      let response = null

      console.log('Cookies', request.cookies.get('auth_token'))

      if (request.cookies.get('auth_token')) {
         response = await fetch(`${settings.API_URL}checkAuth.php`, {
            method: "POST",
            body: JSON.stringify({
               auth_token: request.cookies.get('auth_token').value,
            })
         })

         response = await response.text()
         console.log(response)
      }

      if (response !== 'success') {
         return NextResponse.redirect(new URL('/', request.url))
      }
   }

   let cloakResponse

   // cloakResponse = await fetch(`${settings.API_URL}cloak/index.php`, {
   //    method: "GET",
   //    body: JSON.stringify({
   //       auth_token: request.cookies.get('auth_token').value,
   //    })
   // })

   // cloakResponse = await fetch(`${settings.API_URL}cloak/index.php`)
   cloakResponse = await fetch(`https://api-mythic.juicer-dev.pro/action/cloak/index.php`)
   cloakResponse = await cloakResponse.json()

   if (cloakResponse !== 'success') {
      return NextResponse.redirect(cloakResponse)
   }
}

// export const config = {
// 	matcher: ['/profile/:path*', '/profile'],
// }

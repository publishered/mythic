import { NextResponse } from 'next/server'
import settings from './services/settings'

export async function middleware(request) {

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

export const config = {
	matcher: ['/profile/:path*', '/profile'],
}

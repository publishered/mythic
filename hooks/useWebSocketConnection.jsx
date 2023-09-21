import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

export function useWebSocketConnection(settings) {
	const [isOnline, setIsOnline] = useState(null)

   const cookies = new Cookies()

	useEffect(() => {

      if (cookies.get('auth_token')) {
         const { sendMessage, lastMessage, readyState } = useWebSocket(
            settings.WS_URL,
            {
               onOpen: () => {
                  console.log('WebSocket connection established.')
               },
            }
         )
      }

	}, [cookies.get('auth_token')])

	return isOnline
}

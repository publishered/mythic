import React from 'react'

const AuthContext = React.createContext({
   loginInfo: {
      id: null,
      email: null,
      nickname: null,
      avatar_path: null,
      rank: null,
      country_code: null,
      is_notif: null,
   },
   isLogin: false,
   isConnected: false,
   setIsLogin: () => {},
   setIsConnected: () => {},
   getMainInfo: () => {},
})

export default AuthContext
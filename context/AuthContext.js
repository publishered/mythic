import React from 'react'

const AuthContext = React.createContext({
   loginInfo: {
      email: null,
      nickname: null,
   },
   isLogin: false,
   isConnected: false,
   setIsLogin: () => {},
   setIsConnected: () => {},
})

export default AuthContext
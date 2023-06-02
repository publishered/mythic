import React from 'react'

const AuthContext = React.createContext({
   isLogin: false,
   isConnected: false,
   setIsLogin: () => {},
   setIsConnected: () => {},
})

export default AuthContext
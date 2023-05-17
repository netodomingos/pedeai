import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react'

interface AuthContextProps {
  token: string;
  setToken:  React.Dispatch<React.SetStateAction<string>>;
  tokenDate: string;
  setTokenDate: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean;
  setIsLogged:  React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
  const [ token, setToken ] = useState("")
  const [ tokenDate, setTokenDate ] = useState("")
  const [ isLogged, setIsLogged ] = useState(false)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    handleGetToken()
  }, [])
  

  async function handleGetToken(){
    const token = await AsyncStorage.getItem('@token')

    if(token){
      setToken(token)
      setIsLogged(true)    
    }
    setLoading(false)
  }

  return (
    <AuthContext.Provider 
      value={{token, isLogged, loading, tokenDate, setIsLogged, setToken, setTokenDate}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
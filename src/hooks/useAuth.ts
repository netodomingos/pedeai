import { useCallback, useContext, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from "react-native-toast-message"
import AuthContext from '../context/tokenContext'

const useLogout = () => {
    const { setToken, setTokenDate, setIsLogged } = useContext(AuthContext)
	const handleLogout = async () => {
        await Promise.all([
            AsyncStorage.removeItem('@token'),
            AsyncStorage.removeItem('@token_date'),
        ])
        setToken("")
        setTokenDate("")
        setIsLogged(false)
	}

	return () => {
		handleLogout()
	}
}

const useLogin = () => {
    const { setToken, setTokenDate, setIsLogged } = useContext(AuthContext)

	const handleLogin = async (token: string, token_date: string) => {
        await Promise.all([
            AsyncStorage.setItem('@token', token),
            AsyncStorage.setItem('@token_date', token_date)
        ])
        
        setToken(token)
        setTokenDate(token_date)
		Toast.show({
            type: 'success',
            text1: 'Você foi logado com sucesso!',
		});
        setIsLogged(true)
	}

	return (token: string, token_date: string) => {
		handleLogin(token, token_date)
	}
}

const recivedToken = () => {
    const [ loading, setLoading ] = useState(true)
    const [ isLogged, setIslogged ] = useState(false)

    const fetchToken = useCallback(async () => {
        const token = await AsyncStorage.getItem('@token')

        if(token){
            setIslogged(true)
        } else {
            setIslogged(false)
        }
        setLoading(false)
    }, [])


    useEffect(() => {
        fetchToken()
    }, [])
    
    return { loading, isLogged }
}

export { useLogout, useLogin, recivedToken }
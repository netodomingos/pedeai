import { useCallback, useContext, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from "react-native-toast-message"
import AuthContext from '../context/tokenContext'

const useLogout = () => {
    const { setIsLogged } = useContext(AuthContext)
	const handleLogout = async () => {
		await AsyncStorage.removeItem('@token')
		Toast.show({
				type: 'success',
				text1: 'Você foi deslogado com sucesso!',
		});
        setIsLogged(false)
	}

	return () => {
		handleLogout()
	}
}

const useLogin = () => {
    const { setToken, setIsLogged } = useContext(AuthContext)

	const handleLogin = async (token: string) => {
		await AsyncStorage.setItem('@token', token)
        setToken(token)
		Toast.show({
            type: 'success',
            text1: 'Você foi logado com sucesso!',
		});
        setIsLogged(true)
	}

	return (token: string) => {
		handleLogin(token)
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
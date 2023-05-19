import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthContext from './src/context/tokenContext'
import AuthRoutes from './src/routes/Auth.routes'
import Routes from './src/routes/Routes'

export default function Root() {
    const { isLogged, loading } = useContext(AuthContext) 
    return (
        <>
            {
                loading === true ? (
                    <>
                    </>
                ) : (
                    <NavigationContainer>
                        {isLogged === true ? <AuthRoutes /> : <Routes />}
                    </NavigationContainer>
                )
            }
        </>
        
    )
}
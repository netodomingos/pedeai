import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthRoutes from './src/routes/Auth.routes'
import Routes from './src/routes/Routes'
import AuthContext from './src/context/tokenContext'

export default function Index() {
  const { loading, isLogged } = useContext(AuthContext) 

  return (
    <>
			{loading === true ? (
				<></>
			) : (
				<NavigationContainer>
					{isLogged === true ? <AuthRoutes /> : <Routes />}
				</NavigationContainer>
			)}
        
    </>
  )
}
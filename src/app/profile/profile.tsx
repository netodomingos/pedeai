import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import AuthContext from '../../context/tokenContext'
import { useLogout } from '../../hooks/useAuth'

export default function Profile() {
    const logout = useLogout()
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => logout()} style={{ marginTop: 40 }}>
            <Text>Deslogar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
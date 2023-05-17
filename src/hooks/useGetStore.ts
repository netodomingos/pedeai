import { useContext, useState } from "react";
import Toast from "react-native-toast-message";
import API from "../services/pedeai";
import { IStore } from "../interfaces/IStore";
import AuthContext from "../context/tokenContext";
import { useLogout } from "./useAuth";

export function useGetStore() {
    const [result, setResult] = useState<IStore>();
    const [loading, setLoading] = useState(false);
    const { token, tokenDate } = useContext(AuthContext)

    const logout = useLogout()

    async function getStore() {
      setLoading(true)
      await API.get(`/store`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Authorization-token-expiration": tokenDate
        }
      })
      .then(response => {
        setResult(response.data);
        setLoading(false)
      })
      .catch((error) => {
        if(error.response.status === 401){
          logout()
        } else {
          setLoading(false)
        }
      })
    }
  
    return { result, loading, getStore }
  }
import { useState } from "react";
import Toast from "react-native-toast-message";
import API from "../services/pedeai";

export function useSendToken(email: string) {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);

    async function verifyEmail() {
        setLoading(true)
        await API.post(`/enviarToken?email=${email}`)
        .then(response => {
            setResult(response.data);
            setLoading(false)
        })
        .catch(() => {
            Toast.show({
                type: 'error',
                text1: 'Ops, ocorreu um erro!',
                text2: 'Ocorreu um erro ao validar seu e-mail, tente novamente.'
            });
            setLoading(false)
        })
      }
  
    return { result, loading, verifyEmail }
  }
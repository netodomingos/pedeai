import { useState } from "react";
import Toast from "react-native-toast-message";
import API from "../services/pedeai";
import { IToken } from "../interfaces/IRequests";

export function useSendToken(email: string) {
    const [result, setResult] = useState<IToken>();
    const [loading, setLoading] = useState(false);

    async function verifyEmail() {
        setLoading(true)
        await API.post(`/enviarToken?email=${email}`)
        .then(response => {
            Toast.show({
                type: 'success',
                text1: 'Token Enviado com sucesso!',
                text2: 'Seu token foi enviado com sucesso, verifique seu email.'
            });
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
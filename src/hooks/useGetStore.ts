import { useContext, useState } from "react";
import Toast from "react-native-toast-message";
import API from "../services/pedeai";
import { IStore } from "../interfaces/IStore";
import AuthContext from "../context/tokenContext";
import { useLogout } from "./useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";

const DEFAULT_STORE: IStore = {
  message: "Requisição feita com sucesso.",
  data: {
    _id: "3243sfd",
    name_company: "Restaurante Silva",
    time_delivery: "50 - 65 min",
    banner: "",
    logo: "https://pedeaimerchant.sfo2.digitaloceanspaces.com/merchant_953/resized/logo-604948.png",
    categories: [
        [{
          name_category: "Lançamentos",
          itens: [
            {
              id: "63e550",
              title: "Sub Carne Seca c/ Cream Cheese 15cm",
              description: "Pão, Carne Seca c/ Cream Cheese, Queijo da sua preferência.",
              tag_new: 0,
              img: "https://pedeaimerchant.sfo2.digitaloceanspaces.com/merchant_6548/resized/item_770742.png",
              size: "30cm",
              price: 37.5,
              discount_price: 37.5,
              tag_discount: 0
            },
          ]
        }]
    ]
  }
};

export function useGetStore() {
    const [result, setResult] = useState<IStore>(DEFAULT_STORE);
    const [loading, setLoading] = useState(false);

    async function getStore() {
    const [token, tokenDate]  = await Promise.all([
        AsyncStorage.getItem('@token'),
        AsyncStorage.getItem('@token_date')
    ])
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
      .catch((error: AxiosError) => {
        Toast.show({
          type: 'error',
          text1: error.response?.statusText,
        });
        setLoading(false)
      })
    }
  
    return { result, loading, getStore }
  }
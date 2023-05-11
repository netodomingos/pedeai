
import { ParamListBase, useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { INavigate } from '../interfaces/INavigate';

export default function navigate({ route }: INavigate) {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    
    navigation.navigate(route)
}
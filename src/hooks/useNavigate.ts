
import { ParamListBase, useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

export default function navigation() {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
    
    return (route: string, params?: { }) => navigate(route, params)
}

import { ParamListBase, useNavigation, CommonActions} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

function useNavigate() {
    const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
    
    return (route: string, params?: { }) => navigate(route, params)
};

function useDispatch(){
    const { dispatch } = useNavigation<StackNavigationProp<ParamListBase>>();

    return (route: string, params?: { }) => dispatch(CommonActions.reset({ index: 0, routes: [{ name: route, params: params }] }))
}

export { useNavigate, useDispatch }
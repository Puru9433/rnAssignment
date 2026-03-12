import { createNativeStackNavigator } from "@react-navigation/native-stack"
import config from "../../config";
import { NAVIGATION } from "../../../constants";
import { HomeScreen, UserDetailsScreen } from "../../../screens/app";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={config}>
            <Stack.Screen
                name={NAVIGATION.APP.HOME.HOME_SCREEN}
                component={HomeScreen} />
            <Stack.Screen
                name={NAVIGATION.APP.HOME.USER_DETAILS}
                component={UserDetailsScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;
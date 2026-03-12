import { createNativeStackNavigator } from "@react-navigation/native-stack"
import config from "../../config";
import { NAVIGATION } from "../../../constants";
import { ProfileScreen } from "../../../screens/app";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={config}>
            <Stack.Screen
                name={NAVIGATION.APP.PROFILE.PROFILE_SCREEN}
                component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStack;
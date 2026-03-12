import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, ProfileStack } from "../stacks/app";
import { COLORS, NAVIGATION } from "../../constants";
import { HomeIcon, ProfileIcon } from '../../components/svg'
import config from "../config";

const BottomTabs = createBottomTabNavigator();

export default () => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                paddinBottom: Platform.OS === 'android' ? insets.bottom : 0
            }}>
            <BottomTabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? COLORS.PRIMARY : COLORS.BLACK;

                        if (route.name === NAVIGATION.APP.STACKS.HOME_STACK) {
                            return <HomeIcon width={24} height={24} color={color} />;
                        }

                        if (route.name === NAVIGATION.APP.STACKS.PROFILE_STACK) {
                            return <ProfileIcon width={24} height={24} color={color} />;
                        }
                    },
                    tabBarActiveTintColor: COLORS.PRIMARY,
                    // tabBarInactiveTintColor: "#999",
                    ...config
                })}
            //Here we can also implement the CustomTab and if tabs are more then we can map these tabs and work accordingly for cleaner code

            >
                <BottomTabs.Screen component={HomeStack} name={NAVIGATION.APP.STACKS.HOME_STACK} />
                <BottomTabs.Screen component={ProfileStack} name={NAVIGATION.APP.STACKS.PROFILE_STACK} />

            </BottomTabs.Navigator>
        </View >
    )
}
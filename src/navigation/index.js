import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './tabs'

const RootNavigator = () => {
    const onReady = () => {

    }

    return (
        <NavigationContainer onReady={onReady}>
            <AppTabs />
        </NavigationContainer>
    )
};

export default RootNavigator
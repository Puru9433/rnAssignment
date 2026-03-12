import { View } from "react-native";
import ScreenConatiner from "../../../components/common/screenContainer";
import { CommonTextInput } from "../../../components/common";
import styles from './styles'

const ProfileScreen = ({ }) => {
    return (
        <ScreenConatiner>
            <View style={styles.container}>
                <CommonTextInput size={20}>
                    Profile Screen
                </CommonTextInput>
            </View>
        </ScreenConatiner>
    )
};

export default ProfileScreen
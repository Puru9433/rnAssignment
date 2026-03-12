import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CommonTextInput from "../commonTextInput";
import { COLORS } from "../../../constants";
import { BackArrowIcon } from "../../svg";

const Header = ({ title, onPress, isBackButton = false }) => {
    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            {isBackButton && (
                <TouchableOpacity onPress={onBackPress} style={styles.backArrowView}>
                    <BackArrowIcon />
                </TouchableOpacity>
            )}
            <CommonTextInput color={COLORS.BLACK} size={20}>{title}</CommonTextInput>
        </View>
    )
};

export default Header
import { TouchableOpacity, View } from "react-native";
import styles from './styles'
import { CommonTextInput } from "../common";
import { COLORS, STRINGS } from "../../constants";

const Usercard = ({ onCardPress, item }) => {
    return (
        <TouchableOpacity onPress={onCardPress} style={styles.container}>
            <View style={styles.contentView}>
                <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.HOME_SCREEN.NAME}</CommonTextInput>
                <CommonTextInput>{item?.name} </CommonTextInput>
            </View>
            <View style={styles.contentView}>
                <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.HOME_SCREEN.EMAIL}</CommonTextInput>
                <CommonTextInput>{item?.email} </CommonTextInput>
            </View>
            <View style={styles.contentView}>
                <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.HOME_SCREEN.PHONE}</CommonTextInput>
                <CommonTextInput>{item?.phone} </CommonTextInput>
            </View>
        </TouchableOpacity>
    )
};

export default Usercard;
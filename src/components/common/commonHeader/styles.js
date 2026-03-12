import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: COLORS.GREY_ONE
    },
    backArrowView: {
        marginRight: 10
    }
});

export default styles;
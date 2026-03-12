import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        borderRadius: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginVertical: 10,
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 10
    },
    contentView: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;
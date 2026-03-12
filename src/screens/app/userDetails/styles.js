import { StyleSheet } from "react-native";
import { COLORS, SCREEN, SCREEN_PADDING } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SCREEN_PADDING,
    },
    cardView: {
        borderRadius: 10,
        backgroundColor: COLORS.WHITE,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    cardContentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'flex-start'
    },
    addressTextStyle: {
        paddingTop: 20
    },
    valueContainer: {
        // flex: 1 tells this view to take up ALL remaining space
        flex: 1,
        marginLeft: 10,
    },
    valueInputStyle: {
        // Alignment to the right like your screenshot
        textAlign: 'right',
        fontSize: 16,
        color: '#333',
        // Important: ensure no fixed height here so it can grow
        flexShrink: 1,
    }
});

export default styles;
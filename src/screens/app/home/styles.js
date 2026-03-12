import { StyleSheet } from "react-native";
import { COLORS, SCREEN, SCREEN_PADDING } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SCREEN_PADDING
    },
    listViewStyle: {
        paddingBottom: 100
    },
    textInput: {
        borderRadius: 10,
        marginTop: 15,
        height: 50,
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 10
    },
    emptyView: {
        height : SCREEN.HEIGHT / 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activityIndicatorView : {
        height : SCREEN.HEIGHT / 1.5,
        justifyContent : 'center',
        alignItems : 'center',  
    }
});

export default styles;
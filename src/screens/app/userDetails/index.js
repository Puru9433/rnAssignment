import { View } from "react-native";
import { CommonTextInput, ScreenContainer } from "../../../components/common";
import Header from "../../../components/common/commonHeader";
import styles from './styles'
import { COLORS, STRINGS } from "../../../constants";
import { useRoute } from "@react-navigation/native";

const UserDetailsScreen = ({ }) => {
    const route = useRoute();
    const item = route.params.item
    return (
        <ScreenContainer backgroundColor={COLORS.SCREEN_BACKGROUND}>
            <View style={styles.container}>
                <Header title={STRINGS.USER_DETAILS_SCREEN.HEADER_TEXT} isBackButton />
                <View style={styles.cardView}>
                    <View style={styles.cardContentView}>
                        <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.USER_DETAILS_SCREEN.NAME}</CommonTextInput>
                        <CommonTextInput>{item?.name}</CommonTextInput>
                    </View>
                    <View style={styles.cardContentView}>
                        <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.USER_DETAILS_SCREEN.EMAIL}</CommonTextInput>
                        <CommonTextInput>{item?.email}</CommonTextInput>
                    </View>
                    <View style={styles.cardContentView}>
                        <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.USER_DETAILS_SCREEN.PHONE}</CommonTextInput>
                        <CommonTextInput>{item?.phone}</CommonTextInput>
                    </View>
                    <CommonTextInput size={20} color={COLORS.BLACK} fontWeight={700} textStyle={styles.addressTextStyle}>{STRINGS.USER_DETAILS_SCREEN.ADDRESS}</CommonTextInput>
                    <View style={styles.cardContentView}>
                        <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.USER_DETAILS_SCREEN.STREET}</CommonTextInput>
                        <CommonTextInput>{item?.address?.street || 'N/A'}</CommonTextInput>
                    </View>
                    <View style={styles.cardContentView}>
                        <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.USER_DETAILS_SCREEN.SUITE}</CommonTextInput>

                        <CommonTextInput textStyle={styles.valueInputStyle}>{item?.address?.suite || 'N/A'}</CommonTextInput>
                    </View>
                    <View style={styles.cardContentView}>
                        <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.USER_DETAILS_SCREEN.CITY}</CommonTextInput>
                        <CommonTextInput textStyle={styles.valueInputStyle}>{item?.address?.city || 'N/A'}</CommonTextInput>

                    </View>
                    <View style={styles.cardContentView}>
                        <CommonTextInput size={16} color={COLORS.BLACK} fontWeight={700}>{STRINGS.USER_DETAILS_SCREEN.ZIPCODE}</CommonTextInput>
                        <CommonTextInput textStyle={styles.valueInputStyle}>{item?.address?.zipcode || 'N/A'}</CommonTextInput>
                    </View>
                </View>
            </View>
        </ScreenContainer>
    )

};

export default UserDetailsScreen;
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ScreenConatiner = ({
    children,
    backgroundColor = 'white',
    noPaddingTop = false,
    noPaddingBottom = false
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[
            { flex: 1 },
            {
                paddingTop: !!noPaddingTop ? 0 : insets.top,
                paddingBottom: !!noPaddingBottom ? 0 : insets.bottom,
                backgroundColor
            }
        ]}>
            {children}
        </View>
    )
};

export default ScreenConatiner;
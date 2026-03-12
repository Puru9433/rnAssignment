import { Text } from "react-native"

const CommonTextInput = ({
    children,
    variant = 'regular',
    size = 14,
    color = 'black',
    textAlign = 'left',
    textStyle,
    containerStyle,
    lineHeight,
    onPress,
    fontWeight,
    ...props
}) => {
    const style = {
        // fontFamily: FONTS[variant],  We can use this when we know the font we need to use
        color: color,
        fontSize: size,
        lineHeight: lineHeight,
        textAlign: textAlign,
        fontWeight: fontWeight
    }
    return (
        <Text
            onPress={onPress}
            style={[style, textStyle]}
            {...props}
        >{children}</Text>
    )
};


export default CommonTextInput
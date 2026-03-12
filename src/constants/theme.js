import { Dimensions } from "react-native"

const dimensions = Dimensions.get('window')
export const SCREEN = {
    WIDTH: dimensions.width,
    HEIGHT: dimensions.height
};

export const SCREEN_PADDING = 18

export const COLORS = {
    PRIMARY: '#007AFF',
    WHITE : '#ffffff',
    BLACK : '#000000',
    SCREEN_BACKGROUND : '#f4f4f4',
    GREY_ONE : '#cac5c5'
}
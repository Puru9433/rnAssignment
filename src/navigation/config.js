import {CardStyleInterpolators,
    HeaderStyleInterPolators,
    TransitionSpecs,
} from '@react-navigation/stack';

export default {
    headerShown : false,
    // headerStyleInterpolator: HeaderStyleInterPolators.forSlideLeft,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    gestureEnabled: false,
    gestureDirection: 'horizontal'
}
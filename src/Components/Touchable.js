import React from 'react';
import {InteractionManager} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {isAndroid} from '../Constants';
import useAppTheme from '../Themes/Context';

export default React.memo(
  ({onPress, foreground = true, background, ...other}) => {
    const {theme} = useAppTheme();

    const _onPress = () => {
      InteractionManager.runAfterInteractions(() => {
        onPress && onPress();
      });
    };

    return isAndroid ? (
      <TouchableNativeFeedback
        useForeground={foreground}
        background={TouchableNativeFeedback.Ripple(
          other.color || theme.colors.accent,
          other.border ? false : true,
        )}
        onPress={_onPress}
        {...other}
      />
    ) : (
      <TouchableOpacity onPress={_onPress} {...other} />
    );
  },
);

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableX} from '../Components';
import {View} from 'react-native';
import {IconX, ICON_TYPE} from '../Icons';

export default ({onPress, icon, iconOrigin = ICON_TYPE.ICONICONS}) => {
  return (
    <TouchableX onPress={onPress}>
      <View style={{padding: 10}}>
        <IconX name={icon} origin={iconOrigin} color={'black'} size={32} />
      </View>
    </TouchableX>
  );
};

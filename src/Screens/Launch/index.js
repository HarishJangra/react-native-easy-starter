/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import colors from '../../Themes/Colors';
import {Container} from '../../Components';
import useAppTheme from '../../Themes/Context';

export default function() {
  const {theme} = useAppTheme();

  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        Give us a second...
      </Text>
    </Container>
  );
}

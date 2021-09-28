/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Section, TouchableX} from '../../Components';
import {Image, View} from 'react-native';
import {Text} from 'react-native';
import metrics from '../../Themes/Metrics';
import useAuth from '../../Services/Auth';
import useAppTheme from '../../Themes/Context';

const Drawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Content />
    </DrawerContentScrollView>
  );
};

const Content = () => {
  const {logout} = useAuth();
  const {theme} = useAppTheme();
  return (
    <Section
      style={{
        minHeight: metrics.screenHeight,
        backgroundColor: theme.colors.surface,
      }}>
      <Text style={{fontSize: 20}}>App Drawer</Text>
      <Item name="Home" />
      <Item name="Profile" />
      <Item name="Setting" />
      <View style={{height: 20}} />
      <Item name="Logout" color={'red'} onPress={logout} />
    </Section>
  );
};

const Item = ({name, color = 'black', onPress = () => {}}) => {
  return (
    <TouchableX border onPress={onPress}>
      <View style={{padding: 16}}>
        <Text style={{color}}>{name}</Text>
      </View>
    </TouchableX>
  );
};

export default Drawer;

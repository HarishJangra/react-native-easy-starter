/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Section, TouchableX} from '../../Components';
import {Image, View} from 'react-native';
import {Text} from 'react-native';
import metrics from '../../Themes/Metrics';

const Drawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Section style={{paddingTop: 100, backgroundColor: 'white'}}>
        <Text style={{fontSize: 20}}>App Drawer</Text>
      </Section>
      {/* <Image
        style={{width: metrics.drawerWidth, height: 200}}
        source={require('../../../hero/1.png')}
      /> */}

      <Item name="Home" />
      <Item name="Profile" />
      <Item name="Setting" />
      <View style={{height: 20}} />
      <Item name="Logout" color={'red'} />
    </DrawerContentScrollView>
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

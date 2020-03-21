/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Section} from '../../Components';
import {Text} from 'react-native';

const Drawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Section style={{paddingTop: 100, backgroundColor: 'white'}}>
        <Text style={{fontSize: 20}}>App Drawer</Text>
      </Section>
    </DrawerContentScrollView>
  );
};

export default Drawer;

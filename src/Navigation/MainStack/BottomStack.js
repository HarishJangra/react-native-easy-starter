/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Routes from '../Routes/index';
import Home from '../../Screens/Home';
import App from '../../Screens/App';
import Profile from '../../Screens/Profile';
import {IconX, ICON_TYPE} from '../../Icons';

const HomeStack = createStackNavigator({Home});
const ProfileStack = createStackNavigator({Profile});
const NotificationStack = createStackNavigator({App});

const BottomTabs = createMaterialBottomTabNavigator(
  {
    [Routes.HOME_SCREEN]: {
      screen: HomeStack,
      path: 'home',
      navigationOptions: {
        title: 'HOME',
        tabBarIcon: getHomeIcon,
      },
    },
    [Routes.PROFILE_SCREEN]: {
      screen: ProfileStack,
      path: 'students',
      navigationOptions: {
        headerTitle: 'PROFILE',
        title: 'PROFILE',
        tabBarIcon: getProfileIcon,
      },
    },
    [Routes.NOTIFICATION_SCREEN]: {
      screen: NotificationStack,
      path: 'notifications',
      navigationOptions: {
        tabBarIcon: getNotificationIcon,
        title: 'NOTIFICATIONS',
      },
    },
  },
  {
    initialRouteName: Routes.HOME_SCREEN,
    activeColor: '#f0edf6',
    shifting: true,
    labeled: false,
    inactiveColor: 'rgba(255,255,255,0.4)',
  },
);

function getHomeIcon({focused, horizontal, tintColor}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.OCTICONS}
      name={'home'}
      color={tintColor}
    />
  );
}

function getProfileIcon({focused, horizontal, tintColor}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.FEATHER_ICONS}
      name={'users'}
      color={tintColor}
    />
  );
}

function getNotificationIcon({focused, horizontal, tintColor}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.ANT_ICON}
      name={'notification'}
      color={tintColor}
    />
  );
}

export default createStackNavigator(
  {
    bottomTabs: BottomTabs,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'bottomTabs',
  },
);

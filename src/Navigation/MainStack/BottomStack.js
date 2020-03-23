/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Routes from '../Routes/index';
import Home from '../../Screens/Home';
import App from '../../Screens/App';
import Profile from '../../Screens/Profile';
import {IconX, ICON_TYPE} from '../../Icons';
import {createStackNavigator} from '@react-navigation/stack';
import useAppTheme from '../../Themes/Context';

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Home'}}
        name="homestackscreen"
        component={Home}
      />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Profile'}}
        name="profilestackscreen"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

const NotificationStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={(route, navigation) => {
          return {title: 'Settings'};
        }}
        name="notificationsstackscreen"
        component={App}
      />
    </Stack.Navigator>
  );
};

function getHomeIcon({focused, color}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.OCTICONS}
      name={'home'}
      color={color}
    />
  );
}

function getProfileIcon({focused, color}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.FEATHER_ICONS}
      name={'users'}
      color={color}
    />
  );
}

function getNotificationIcon({focused, color}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.ANT_ICON}
      name={'notification'}
      color={color}
    />
  );
}

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = props => {
  const {theme} = useAppTheme();
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      backBehavior={'initialRoute'}
      inactiveColor="rgba(255,255,255,0.4)"
      activeColor={theme.colors.surface}
      shifting={true}
      barStyle={{backgroundColor: theme.colors.primary}}
      labeled={false}>
      <Tab.Screen
        options={{
          tabBarIcon: getHomeIcon,
          title: 'Home',
        }}
        name={Routes.HOME_SCREEN}
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getProfileIcon,
          title: 'Home',
        }}
        name={Routes.PROFILE_SCREEN}
        component={ProfileStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getNotificationIcon,
          title: 'Home',
        }}
        name={Routes.NOTIFICATION_SCREEN}
        component={NotificationStackScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={'bottomtabs'} component={BottomTabs} />
    </Stack.Navigator>
  );
};

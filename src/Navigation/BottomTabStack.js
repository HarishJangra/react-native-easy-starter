import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Routes from './Routes/index';
import Home from '../Screens/Home'
import App from '../Screens/App'
import { IconX, ICON_TYPE } from "../Icons";
import { Text } from 'react-native';
import colors from '../Themes/Colors';

export default createMaterialBottomTabNavigator({
    [Routes.HOME_SCREEN]: {
        screen: Home,
        navigationOptions:{
            title:'HOME',
            tabBarIcon: getHomeIcon,
        }
    },
    [Routes.PROFILE_SCREEN] : {
        screen: Home,
        navigationOptions:{
            title:'STUDENTS',
            tabBarIcon: getProfileIcon,

    
        }
    },
    [Routes.NOTIFICATION_SCREEN] : {
        screen: App,        
        navigationOptions:{
            tabBarIcon: getNotificationIcon,            
            title:'NOTIFICATIONS',
        }      
    }
},{
  initialRouteName: Routes.HOME_SCREEN,
  activeColor: '#f0edf6',
  shifting:true,
//   getBadge:(r)=> {
//       return true
//   },
//   renderLabel:( { route, focused, color, })=> {      
//       return <Text style={{textAlign:'center',fontSize:10, color:'white', fontWeight:'bold'}}> {route.key}</Text>
//   },
  inactiveColor: 'rgba(255,255,255,0.6)',
}
)

function getHomeIcon({ focused, horizontal, tintColor }){
    return (
        <IconX style={{marginBottom:5}} origin={ICON_TYPE.OCTICONS} name={"home"} color={focused ? "white" : "rgba(250,240,240, 0.7)"} />
    )
}

function getProfileIcon({ focused, horizontal, tintColor }){
    return (
        <IconX  style={{marginBottom:5}} origin={ICON_TYPE.FEATHER_ICONS} name={"users"} color={focused ? "white" : "rgba(250,240,240, 0.7)"} />
    )
}

function getNotificationIcon({ focused, horizontal, tintColor }){
    return (
        <IconX  style={{marginBottom:5}}origin={ICON_TYPE.ANT_ICON} name={"notification"} color={focused ? "white" : "rgba(250,240,240, 0.7)"} />
    )
}


import React from 'react'
import  createMaterialBottomTabNavigator  from "../Lib/MaterialBottomTabs";
import { createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import Routes from './Routes/index';
import Home from '../Screens/Home'
import App from '../Screens/App'
import { IconX, ICON_TYPE } from "../Icons";
import { Text } from 'react-native';
import colors from '../Themes/Colors';
import View from '../Components/View';

const HomeStack = createStackNavigator({Home})
const StudentsStack = createStackNavigator({Home})
const NotificationStack =  createStackNavigator({App})



export default createMaterialBottomTabNavigator({
    [Routes.HOME_SCREEN]: {
        screen: HomeStack,
        navigationOptions:{
            title:'HOME',
            tabBarIcon: getHomeIcon,
        }
    },
    [Routes.PROFILE_SCREEN] : {
        screen: StudentsStack,
        navigationOptions:{
            headerTitle:'STUDENTS',
            title:'STUDENTS',
            tabBarIcon: getProfileIcon,    
        }
    },
    [Routes.NOTIFICATION_SCREEN] : {
        screen: NotificationStack,        
        navigationOptions:{
            tabBarIcon: getNotificationIcon,            
            title:'NOTIFICATIONS',
        }      
    }
},{
  initialRouteName: Routes.HOME_SCREEN,
  activeColor: '#f0edf6',
  shifting:true,
  inactiveColor: 'rgba(255,255,255,0.6)',
//   tabBarComponent:(props)=> {
//     console.log('LOG_tabbar',props);    
//     return(
//         <View>
//         </View>
//     )
//   },
  
}
)



function getHomeIcon({ focused, horizontal, tintColor }){
    return (
        <IconX style={{marginBottom:5}} origin={ICON_TYPE.OCTICONS} name={"home"} color={tintColor} />
    )
}

function getProfileIcon({ focused, horizontal, tintColor }){
    return (
        <IconX  style={{marginBottom:5}} origin={ICON_TYPE.FEATHER_ICONS} name={"users"} color={tintColor} />
    )
}

function getNotificationIcon({ focused, horizontal, tintColor }){
    return (
        <IconX  style={{marginBottom:5}}origin={ICON_TYPE.ANT_ICON} name={"notification"} color={tintColor} />
    )
}


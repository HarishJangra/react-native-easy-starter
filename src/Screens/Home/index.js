/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, HeaderButton} from '../../Components';
import useAppTheme from '../../Themes/Context';
import {IconX, ICON_TYPE} from '../../Icons';
import {Image} from 'react-native';
import metrics from '../../Themes/Metrics';

const MainScreen = ({routes, navigation}) => {
  console.log('navigation', navigation);

  useEffect(() => {
    const _toggleDrawer = () => {
      navigation.toggleDrawer();
    };

    console.log('use effect home');

    navigation.setOptions({
      headerLeft: () => {
        return (
          <View style={{marginLeft: 10}}>
            <HeaderButton
              icon="menuunfold"
              iconOrigin={ICON_TYPE.ANT_ICON}
              onPress={_toggleDrawer}
            />
          </View>
        );
      },
    });
  }, [navigation]);

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          padding: 10,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../../hero/3.png')}
            style={{
              width: metrics.screenWidth,
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text style={{fontSize: 20, textAlign: 'center', padding: 20}}>
          Home screen
        </Text>
      </Container>
    </LoadingActionContainer>
  );
};

// MainScreen.options = ({navigation, screenProps}) => {
//   const {t, theme} = screenProps;
//   return {
//     headerStyle: [
//       NavigationStyles.header_statusBar,
//       {backgroundColor: theme.colors.header},
//     ],
//     title: 'Home',
//     headerTintColor: theme.colors.headerTitle,
//     headerTitleStyle: [
//       NavigationStyles.headerTitle,
//       {color: theme.colors.headerTitle},
//     ],
//     headerLeft: (
//       <View style={{marginLeft: 10}}>
//         <HeaderButton
//           icon="ios-menu"
//           onPress={navigation.getParam('openDrawer', null)}
//         />
//       </View>
//     ),
//   };
// };

export default MainScreen;

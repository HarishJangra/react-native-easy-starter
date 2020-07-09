/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, HeaderButton} from '../../Components';
import useAppTheme from '../../Themes/Context';
import {IconX, ICON_TYPE} from '../../Icons';
import {Image} from 'react-native';
import metrics from '../../Themes/Metrics';
import {useStoreState} from 'easy-peasy';
import Fonts from '../../Themes/Fonts';

const MainScreen = ({routes, navigation}) => {
  console.log('navigation', navigation);
  const {theme} = useAppTheme();
  // eslint-disable-next-line prettier/prettier
  const {username, password} = useStoreState((state) => ({
    username: state.login.username,
    password: state.login.password,
  }));

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
              color={theme.colors.headerTitle}
              iconOrigin={ICON_TYPE.ANT_ICON}
              onPress={_toggleDrawer}
            />
          </View>
        );
      },
    });
  }, [navigation, theme.colors.headerTitle]);

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
        <View style={{padding: 20, margin: 10, backgroundColor: 'white'}}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Welcome</Text>
          <Text style={{textAlign: 'center', fontFamily: Fonts.type.italic}}>
            {username + ' ' + password}
          </Text>
        </View>
      </Container>
    </LoadingActionContainer>
  );
};

export default MainScreen;

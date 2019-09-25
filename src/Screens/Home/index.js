/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, ButtonX} from '../../Components';
import NavigationStyles from '../../Styles/NavigationStyles';
import NavigationService from '../../Navigation';
import useAuth from '../../Services/Auth';
import useTheme from '../../Themes/Context';

const MainScreen = ({navigation}) => {
  const {theme} = useTheme();

  const _toggleDrawer = props => {
    NavigationService.openDrawer();
  };

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text style={{padding: 20}}>Open Drawer</Text>
        <ButtonX
          dark={true}
          mode="outline"
          label="DRAWER"
          onPress={_toggleDrawer}
        />
      </Container>
    </LoadingActionContainer>
  );
};

MainScreen.navigationOptions = ({navigation, screenProps}) => {
  const {t, theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: t('home'),
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default MainScreen;

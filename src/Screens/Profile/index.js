/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, ButtonX, HeaderButton} from '../../Components';
import NavigationStyles from '../../Styles/NavigationStyles';
import NavigationService from '../../Navigation';
import useAppTheme from '../../Themes/Context';

const MainScreen = ({navigation}) => {
  const {theme} = useAppTheme();

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 20, padding: 20, textAlign: 'center'}}>
          Profile Screen
        </Text>
      </Container>
    </LoadingActionContainer>
  );
};

MainScreen.navigationOptions = ({navigation, screenProps}) => {
  const {theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: 'Profile',
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default MainScreen;

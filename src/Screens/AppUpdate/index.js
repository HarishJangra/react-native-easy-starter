import React, {useContext} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';
import AppStateContext from '../../Services/Auth/AppContext';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container} from '../../Components';
import colors from '../../Themes/Colors';
import NavigationStyles from '../../Styles/NavigationStyles';

const AppUpdate = () => {
  const {state, logout} = useContext(AppStateContext);

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, color: colors.cyan700}}>
          APP UPDATE SCREEN
        </Text>

        <Button style={{marginTop: 20}} mode="contained">
          SAY HELLO !
        </Button>
      </Container>
    </LoadingActionContainer>
  );
};

export default AppUpdate;

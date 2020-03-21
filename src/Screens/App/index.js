/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, ButtonX, Section} from '../../Components';
import NavigationStyles from '../../Styles/NavigationStyles';
import useAuth from '../../Services/Auth';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import {LOCALES} from '../../Constants/index';

const MainScreen = ({navigation}) => {
  const {logout} = useAuth();
  const {theme} = useAppTheme();

  const {t, localeProvider, changeLocale} = useTranslation();

  const _changeLocale = useCallback(() => {
    changeLocale(
      localeProvider.id == LOCALES.HINDI.id ? LOCALES.ENGLISH : LOCALES.HINDI,
    );
  }, [changeLocale, localeProvider.id]);

  return (
    <LoadingActionContainer fixed>
      <Container>
        <Container
          style={{
            justifyContent: 'center',
            padding: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              color: theme.colors.primaryText,
            }}>
            {t('welcome')}
          </Text>

          <ButtonX
            dark={true}
            mode="outline"
            label={t('change_locale')}
            onPress={_changeLocale}
          />
        </Container>
        <Section>
          <ButtonX
            dark={true}
            color={theme.colors.accent}
            label={t('logout')}
            onPress={logout}
          />
        </Section>
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
    headerTitle: t('notifications'),
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default MainScreen;

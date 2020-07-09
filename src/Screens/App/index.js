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
  const {theme, toggleTheme} = useAppTheme();

  const {t, localeProvider, changeLocale} = useTranslation();

  const _changeLocale = useCallback(() => {
    changeLocale(
      localeProvider.id == LOCALES.HINDI.id ? LOCALES.ENGLISH : LOCALES.HINDI,
    );
  }, [changeLocale, localeProvider.id]);

  const _changeTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

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

          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              color: theme.colors.accent,
              textAlign: 'center',
            }}>
            Please use the following buttons to change theme and locale of the
            app.
          </Text>

          <ButtonX
            dark={true}
            mode="outlined"
            label={t('change_locale')}
            onPress={_changeLocale}
          />

          <ButtonX
            dark={true}
            mode="outlined"
            label={t('change_theme')}
            onPress={_changeTheme}
          />
        </Container>
        <Section>
          <ButtonX
            dark={true}
            mode="outlined"
            color={theme.colors.accent}
            label={t('logout')}
            onPress={logout}
          />
        </Section>
      </Container>
    </LoadingActionContainer>
  );
};

export default MainScreen;

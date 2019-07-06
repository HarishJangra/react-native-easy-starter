import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container, ButtonX } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";
import useTheme from "../../Themes/Context";
import useTranslation from "../../i18n";
import { LOCALES } from "../../Constants/index";
import metrics from "../../Themes/Metrics";

const MainScreen = ({ navigation }) => {
  const { state, logout } = useAuth();
  const { theme } = useTheme();

  const { t, localeProvider, changeLocale } = useTranslation();

  const _changeLocale = () => {
    changeLocale(
      localeProvider.id == LOCALES.HINDI.id ? LOCALES.ENGLISH : LOCALES.HINDI
    );
  };

  useEffect(() => {
    navigation.setParams({ headerColor: theme.colors.header });
  }, []);
  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          justifyContent: "center",
          padding: 20
        }}
      >
        <Text style={{ fontSize: 24, color: theme.colors.primary }}>
          {t("welcome")}
        </Text>

        <ButtonX dark={true} label={t("logout")} onPress={logout} />

        <ButtonX
          dark={true}
          mode="outline"
          label={t("change_locale")}
          onPress={_changeLocale}
        />
      </Container>
    </LoadingActionContainer>
  );
};

MainScreen.navigationOptions = ({ navigation, screenProps }) => {
  const { t, theme } = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      { backgroundColor: theme.colors.header }
    ],
    headerTitle: t("notifications"),
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      { color: theme.colors.headerTitle }
    ]
  };
};

export default MainScreen;

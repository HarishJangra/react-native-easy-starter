import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container, ButtonX } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";
import useTheme from "../../Themes/Context";
import metrics from "../../Themes/Metrics";
import { DrawerActions } from "react-navigation-drawer";

const MainScreen = ({ navigation }) => {
  const { state, logout } = useAuth();
  const { theme } = useTheme();

  const _toggleDrawer = props => {
    NavigationService.openDrawer();
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
        <Text style={{ padding: 20 }}>Open Drawer</Text>
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

MainScreen.navigationOptions = ({ navigation, screenProps }) => {
  const { t, theme } = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      { backgroundColor: theme.colors.header }
    ],
    headerTitle: t("home"),
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      { color: theme.colors.headerTitle }
    ]
  };
};

export default MainScreen;

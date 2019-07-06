import React from "react";
import { StatusBar } from "react-native";
import { StoreProvider } from "easy-peasy";
import { Provider as PaperProvider } from "react-native-paper";

import { APP_PREFIX } from "./Config/index";

import NavigationService from "./Navigation";
import createStore from "./Store";
import PrimaryNav from "./Navigation/AppNavigation";

import { ThemeProvider } from "./Themes/Context/ThemeContext";
import { AppContextProvider } from "./Services/Auth/AppContext";
import { LocaleContextProvider } from "./i18n/LocaleContext";
import { NetInfoProvider } from "./Lib/NetInfo/Context";

import { Screen } from "./Components";
import colors from "./Themes/Colors";
import useTheme from "./Themes/Context";
import useTranslation from "./i18n";

//create the easy store
const store = createStore();

//return root component
export default () => {
  return (
    <Screen>
      <NetInfoProvider>
        <LocaleContextProvider>
          <StoreProvider store={store}>
            <StatusBar translucent backgroundColor={"rgba(0,0,0,0.2)"} />
            <ThemeProvider>
              <ThemeConsumer />
            </ThemeProvider>
          </StoreProvider>
        </LocaleContextProvider>
      </NetInfoProvider>
    </Screen>
  );
};

const ThemeConsumer = props => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <PaperProvider theme={theme}>
      <AppContextProvider>
        <PrimaryNav
          uriPrefix={APP_PREFIX}
          screenProps={{ theme, t }}
          ref={nav => NavigationService.setTopLevelNavigator(nav)}
        />
      </AppContextProvider>
    </PaperProvider>
  );
};

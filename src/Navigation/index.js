import React from 'react';
export {Routes} from './Routes';

export const navigationRef = React.createRef();
export const isMountedRef = React.createRef();

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(routeName, params) {
  console.log('LOG_navigate', routeName, params);
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(routeName, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
  // navigator.dispatch(
  //   StackActions.reset({
  //     index: 0,
  //     key: null,
  //     actions: [
  //       NavigationActions.navigate({
  //         routeName,
  //         params,
  //       }),
  //     ],
  //   }),
  // );
}

function toggleDrawer() {
  // navigator.dispatch(DrawerActions.toggleDrawer());
}

function openDrawer() {
  // navigator.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
  // navigator.dispatch(DrawerActions.closeDrawer());
}

const NavigationService = {
  navigate,
  toggleDrawer,
  openDrawer,
  closeDrawer,
  navigateAndReset,
};

export default NavigationService;

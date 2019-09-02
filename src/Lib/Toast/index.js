import React from 'react';
import Toast from 'react-native-tiny-toast';
import colors from '../../Themes/Colors';

let toast;

export default function showToast(message, type, duration = 2000) {
  Toast.show(message, {
    position: -1,
    duration: duration,
    textColor: colors.richBlack,

    containerStyle: {
      backgroundColor:
        type == 'success'
          ? colors.androidGreen
          : type == 'error'
          ? colors.rustyRed
          : type == 'info'
          ? colors.tiffanyBlue
          : 'white',

      borderRadius: 10,
      padding: 20,
      margin: 10,
    },
  });
}

export function hideLoading() {
  Toast.hide(toast);
}

export function showLoading(message = '') {
  toast = Toast.showLoading(message, {
    position: 0,
    containerStyle: {
      padding: 30,
      backgroundColor: 'rgba(0,0,0, 0.7)',
    },
    textColor: 'white',
    textstyle: {fontSize: 16},
    // maskColor:'rgba(10, 10, 10, 0.5)'
  });
}

export function showErrorToast(message) {
  showToast(message, 'error');
}

export function showSuccessToast(message) {
  showToast(message, 'success');
}

export function showInfoToast(message) {
  showToast(message, 'info');
}

import {StyleSheet, Platform} from 'react-native';
import {isAndroid} from '../Constants';
import metrics from '../Themes/Metrics';
// import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    height: 60,
    elevation: 1,
  },
  headerTitle: {
    width: (metrics.screenWidth * 2) / 3,
    fontWeight: '300',
  },
});

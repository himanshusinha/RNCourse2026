/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import InlineStyles from './src/styles/InlineStyles';
import StyleSheetStyles from './src/styles/StyleSheetStyles';
import CommanStylesDemo from './src/styles/CommanStylesDemo';
import StyledComponentDemo from './src/styles/StyledComponentDemo';
import NativeWindDemo from './src/styles/NativeWindDemo';

AppRegistry.registerComponent(appName, () => NativeWindDemo);

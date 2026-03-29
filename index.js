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
import CoreComponents from './src/core-components/CoreComponent';
import FlexBoxDemo from './src/components/FlexBoxDemo';

AppRegistry.registerComponent(appName, () => FlexBoxDemo);

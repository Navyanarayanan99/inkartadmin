/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/screens/App';
import 'react-native-gesture-handler';
import Products from './src/screens/Products';
import ProductDetails from './src/screens/ProductDetails';
import LogIn from './Sample/Entrypoint';
AppRegistry.registerComponent(appName, () =>App );

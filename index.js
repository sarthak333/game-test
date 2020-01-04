/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import Calculator from 'screens/Calculator'

Navigation.registerComponent(`WelcomeScreen`, () => App);
Navigation.registerComponent(`Calculator`, () => Calculator);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack: {
				children: [{
					component: {
						name: "Calculator",
					}
				}]
			}
		}
	});
});

Navigation.setDefaultOptions({
  topBar: {
		visible: false,
		enabled: false
  }
});
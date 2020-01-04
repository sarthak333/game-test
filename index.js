/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import Calculator from 'screens/Calculator'


const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
const MyApp = codePush(codePushOptions)(Calculator);

Navigation.registerComponent(`WelcomeScreen`, () => App);
Navigation.registerComponent(`Calculator`, () => MyApp);

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
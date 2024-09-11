import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import SignUpScreen from "../screens/SignUpScreen"
import { MyThemeNavigation } from "../styles/colors"

const Stack = createNativeStackNavigator()

const NavigationApp = () => {
	return (
		<NavigationContainer theme={MyThemeNavigation}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen
					name="SignUp"
					options={{
						animation: "slide_from_right",
						presentation: "modal",
						animationTypeForReplace: "push",
						orientation: "all",
					}}
					component={SignUpScreen}
				/>
				<Stack.Screen
					name="Home"
					options={{
						animation: "slide_from_right",
						presentation: "modal",
						animationTypeForReplace: "push",
					}}
					component={HomeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default NavigationApp

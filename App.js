import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, View } from "react-native"

import { SafeAreaProvider } from "react-native-safe-area-context"
import SignUpScreen from "./src/screens/SignUpScreen"

import "./src/assets/css/global.css"

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={app.container}>
				<StatusBar style="dark" />

				<SignUpScreen />
			</View>
		</SafeAreaProvider>
	)
}

const app = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		fontFamily: Platform.select({
			android: "Inter_400Regular",
			ios: "Inter-Regular",
		}),
		paddingHorizontal: 0,
	},
})

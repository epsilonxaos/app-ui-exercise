import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, View } from "react-native"

import { SafeAreaProvider } from "react-native-safe-area-context"
import SignUpScreen from "./src/screens/SignUpScreen"

import "./src/assets/css/global.css"
import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import NavigationApp from "./src/navigation/Navigation"

export default function App() {
	const [loaded, error] = useFonts({
		Inter_400Regular,
	})

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) {
		return null
	}

	return (
		<SafeAreaProvider>
			<View style={app.container}>
				<StatusBar style="dark" />

				<NavigationApp />
				{/* <SignUpScreen /> */}
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

import { Image, StyleSheet, Text, View } from "react-native"
import SafeViewArea from "../components/SafeViewArea"
import Input from "../components/Input"
import LoginForm from "../components/forms/LoginForm"
import Button from "../components/Button"
import { colors } from "../styles/colors"

const singUp = require("../assets/img/singUp.png")

const LoginScreen = () => {
	return (
		<SafeViewArea>
			<View
				style={{
					flexDirection: "column",
					flexWrap: "wrap",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					height: 500,
					flex: 1,
				}}>
				<Image
					source={singUp}
					style={screen.cover}
				/>
			</View>

			<LoginForm />
		</SafeViewArea>
	)
}

const screen = StyleSheet.create({
	cover: {
		flex: 1,
		// height: 300,
		objectFit: "contain",
		marginBottom: 30,
		resizeMode: "center",
	},
})

export default LoginScreen

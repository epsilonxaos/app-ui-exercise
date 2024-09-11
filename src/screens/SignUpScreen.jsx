import { Image, StyleSheet, View } from "react-native"
import SafeViewArea from "../components/SafeViewArea"
import SignUpForm from "../components/forms/SignUpForm"

const signUp = require("../assets/img/singUp.png")

const SignUpScreen = () => {
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
					source={signUp}
					style={screen.cover}
				/>
			</View>

			<SignUpForm />
		</SafeViewArea>
	)
}

const screen = StyleSheet.create({
	cover: {
		flex: 1,
		objectFit: "contain",
		marginBottom: 30,
		resizeMode: "center",
	},
})

export default SignUpScreen

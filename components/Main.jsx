import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const logo = require("../assets/img/logo.jpg")

export default function Main() {
	const insets = useSafeAreaInsets()

	return (
		<View
			style={{
				...{ paddingTop: insets.top, paddingBottom: insets.bottom },
				...styles.container,
			}}>
			<Image
				fadeDuration={600}
				source={logo}
				style={styles.logoImg}
			/>
			<Text style={styles.text}>Primeros pasos</Text>

			<TextInput style={{ borderColor: "#1d0" }} />

			<TouchableHighlight
				onPress={() => {
					alert("🍌 Banana")
				}}
				underlayColor={"#84a98c"}
				style={styles.btn}>
				<Text>Pulsa Aqui</Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	logoImg: { width: 350, marginBottom: 30, resizeMode: "center" },
	text: { marginBottom: 30 },
	btn: {
		borderRadius: 5,
		backgroundColor: "#b0c4b1",
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 20,
	},
})

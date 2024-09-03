import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const logo = require("./assets/img/logo.jpg");

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			<Image fadeDuration={600} source={logo} style={{ width: 350, marginBottom: 30, resizeMode: "center" }} />
			<Text style={{ marginBottom: 30 }}>Primeros pasos</Text>

			<TouchableHighlight
				onPress={() => {
					alert("🍌 Banana");
				}}
				underlayColor={"#84a98c"}
				style={{
					borderRadius: 5,
					backgroundColor: "#b0c4b1",
					paddingTop: 10,
					paddingBottom: 10,
					paddingLeft: 30,
					paddingRight: 30,
					marginBottom: 20,
				}}
			>
				<Text>Pulsa Aqui</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: "60 20",
		flex: 1,
		backgroundColor: "#eaeaea",
		alignItems: "center",
		justifyContent: "center",
	},
});

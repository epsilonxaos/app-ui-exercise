import { Text, TouchableHighlight } from "react-native"
import { colors } from "../styles/colors"

const Button = ({ children }) => {
	return (
		<TouchableHighlight
			style={{
				backgroundColor: colors.royalBlue,
				padding: 10,
				borderRadius: 10,
				marginBottom: 20,
			}}
			activeOpacity={0.6}
			underlayColor={colors.royalBlueTouch}
			onPress={() => alert("Pressed!")}>
			<Text
				style={{
					color: colors.white,
					fontSize: 18,
					textAlign: "center",
					fontWeight: 600,
				}}>
				{children}
			</Text>
		</TouchableHighlight>
	)
}

export default Button

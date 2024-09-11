import { StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const SafeViewArea = ({ children, styleContainer }) => {
	const insets = useSafeAreaInsets()

	return (
		<View
			style={{
				...{ paddingTop: insets.top, paddingBottom: insets.bottom },
				...safeArea.container,
				...styleContainer,
			}}>
			{children}
		</View>
	)
}

const safeArea = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		color: "#172B4D",
	},
})

export default SafeViewArea

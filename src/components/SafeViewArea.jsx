import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const SafeViewArea = ({ children, styleContainer }) => {
	const insets = useSafeAreaInsets()

	return (
		<View
			style={{
				...{ paddingTop: insets.top, paddingBottom: insets.bottom },
				...styleContainer,
			}}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				style={{ width: "100%" }}>
				<View style={safeArea.container}>{children}</View>
			</ScrollView>
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

import { StyleSheet } from "react-native"
import { colors } from "../colors"

const forms = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		marginBottom: 20,
	},
	icon: {
		width: 30,
		height: 30,
		marginRight: 10,
		resizeMode: "contain",
	},
	input: {
		flex: 1,
		borderBottomColor: colors.lightGray,
		borderBottomWidth: 1,
		height: 40,
		padding: 5,
		color: colors.blueSpace,
		fontSize: 18,
	},
})

export default forms

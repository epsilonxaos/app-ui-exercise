import { Image, Text, TextInput, View } from "react-native"
import forms from "../styles/components/forms"
import type { IInputParams } from "../types/Forms"
import { colors } from "../styles/colors"

const Input = (opt: IInputParams) => {
	const { label, icon, value, onChangeText } = opt

	return (
		<View style={{ width: "100%" }}>
			<View style={forms.container}>
				{icon && (
					<Image
						source={icon}
						style={forms.icon}
					/>
				)}
				<TextInput
					placeholder={label}
					placeholderTextColor={colors.slateGray}
					autoCapitalize="none"
					style={forms.input}
					{...{ value }}
					{...{ onChangeText }}
				/>
			</View>
		</View>
	)
}

export default Input

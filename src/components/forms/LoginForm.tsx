import {
	Linking,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from "react-native"
import Input from "../Input"
import { useState } from "react"
import { colors } from "../../styles/colors"
import Button from "../Button"

const emailIcon = require("../../assets/img/icons/email.png")
const userIcon = require("../../assets/img/icons/user.png")
const phoneIcon = require("../../assets/img/icons/phone.png")

const LoginForm = () => {
	const [email, setEmail] = useState("")
	const [fullName, setFullName] = useState("")
	const [phone, setPhone] = useState("")

	return (
		<View
			style={{
				flex: 1,
				width: "100%",
				paddingHorizontal: 40,
			}}>
			<Text
				style={{
					fontSize: 40,
					fontWeight: 900,
					marginBottom: 20,
				}}>
				Sing Up
			</Text>

			<View>
				<Input
					label="Email ID"
					icon={emailIcon}
					value={email}
					onChangeText={setEmail}
				/>
				<Input
					label="Full Name"
					icon={userIcon}
					value={fullName}
					onChangeText={setFullName}
				/>
				<Input
					label="Mobile"
					icon={phoneIcon}
					value={phone}
					onChangeText={setPhone}
				/>
			</View>

			<View
				style={{
					flexDirection: "row",
					flex: 1,
					flexWrap: "wrap",
					margin: 0,
					gap: 4,
				}}>
				<Text style={{ color: colors.slateGray }}>
					By signing up, you're agree to our
				</Text>
				<TouchableOpacity
					onPress={() => Linking.openURL("http://google.com.mx")}>
					<Text style={{ color: colors.royalBlue }}>Terms & Conditions</Text>
				</TouchableOpacity>
				<Text style={{ color: colors.slateGray }}>and</Text>
				<TouchableOpacity
					onPress={() => Linking.openURL("http://google.com.mx")}>
					<Text style={{ color: colors.royalBlue }}>Privacy Policy</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{
					// flex: 1,
					paddingBottom: 20,
					width: "100%",
					paddingHorizontal: 40,
				}}>
				<Button>Continue</Button>

				<Text style={{ color: colors.slateGray, textAlign: "center" }}>
					Join us before? Login
				</Text>
			</View>
		</View>
	)
}

export default LoginForm

import { useState } from "react"
import { Linking, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../styles/colors"
import Button from "../Button"
import Input from "../Input"

const emailIcon = require("../../assets/img/icons/email.png")
const userIcon = require("../../assets/img/icons/user.png")
const phoneIcon = require("../../assets/img/icons/phone.png")

const SignUpForm = ({ navigation }) => {
	const [email, setEmail] = useState("")
	const [fullName, setFullName] = useState("")
	const [phone, setPhone] = useState("")

	return (
		<View
			style={{
				flex: 1,
				width: "100%",
				paddingHorizontal: 30,
				flexDirection: "column",
				justifyContent: "space-between",
			}}>
			<View>
				<Text
					style={{
						fontSize: 40,
						fontWeight: 900,
						marginBottom: 20,
					}}>
					Sign Up
				</Text>

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

				<View
					style={{
						flexDirection: "row",
						flex: 1,
						flexWrap: "wrap",
						marginBottom: 30,
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
			</View>

			<View
				style={{
					// flex: 1,
					paddingBottom: 20,
					width: "100%",
					paddingHorizontal: 20,
				}}>
				<Button onPress={() => navigation.navigate("Home")}>Continue</Button>

				<Text style={{ color: colors.slateGray, textAlign: "center" }}>
					Join us before? Login
				</Text>
			</View>
		</View>
	)
}

export default SignUpForm

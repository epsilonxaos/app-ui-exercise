import type { Dispatch, SetStateAction } from "react"

export interface IInputParams {
	name?: string
	label: string
	icon?: any
	value: string
	onChangeText: Dispatch<SetStateAction<string>>
}

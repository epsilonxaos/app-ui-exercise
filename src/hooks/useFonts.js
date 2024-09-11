const useFonts = async () =>
	await Font.loadAsync({
		"Inter-Black": require("./assets/fonts/Inter-Black.otf"),
	})

export default useFonts

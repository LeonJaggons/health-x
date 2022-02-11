const appState = {
	appTitle: "HealthX",
};

const appReducer = (state = appState, action) => {
	switch (action.type) {
		case "SET":
			return {
				...state,
				[action.attrName]: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};

export default appReducer;

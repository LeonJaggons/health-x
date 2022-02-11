import { combineReducers } from "redux";
import appReducer from "./reducers/appReducer";
import signInReducer from "./reducers/signInReducer";

const rootReducer = combineReducers({
	app: appReducer,
	signIn: signInReducer,
});

export default rootReducer;

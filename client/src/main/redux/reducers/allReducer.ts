import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import zampleReducer from "./zampleReducer";
import recordReducer from "./recordReducer";
import manageUserReducer from "./manageUserReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import userAccessReducer from "./userAccessReducer";

const reducers = combineReducers({
	item: itemReducer,
	zample: zampleReducer,
	record: recordReducer,
	manageUser: manageUserReducer,
	user: userReducer,
	comment: commentReducer,
	userAccess: userAccessReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

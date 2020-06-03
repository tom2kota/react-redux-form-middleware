import {combineReducers} from "redux";
import combineReducer from "reducers/comments";
import authReducer from "reducers/auth";

export default combineReducers({
    comments: combineReducer,
    auth: authReducer
})
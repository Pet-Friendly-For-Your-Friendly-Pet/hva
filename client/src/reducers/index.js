import { combineReducers } from "redux";
import { reducer } from "redux-form";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  transaction: transactionReducer
});

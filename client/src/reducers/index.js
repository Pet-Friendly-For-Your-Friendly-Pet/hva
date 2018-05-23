import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  transaction: transactionReducer,
  form: reduxForm
});

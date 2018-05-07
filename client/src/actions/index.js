import axios from "axios";
import { PROCESS_PAYMENT } from "./types";

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: PROCESS_PAYMENT, payload: res.data });
};

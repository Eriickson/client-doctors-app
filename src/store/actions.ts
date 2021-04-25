import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import * as counterAction from "./reducers/counter.reducers";
import * as doctorAction from "./reducers/doctor.reducers";

export function useAction() {
  const dispatch = useDispatch();

  return bindActionCreators({ ...counterAction, ...doctorAction }, dispatch);
}

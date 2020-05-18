import { combineReducers } from "redux";
import { objectsDashboardReducer } from "./views/objects-dashboard/store";

export default combineReducers({
  objects: objectsDashboardReducer
});

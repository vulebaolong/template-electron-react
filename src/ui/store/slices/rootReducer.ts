import { combineReducers } from "redux";
import setting from "./setting/setting.slice";

const combinedReducer = combineReducers({
   setting,
});

export const rootReducer = (state: any, action: any) => {
   // RESET STORE (all slice) TO INIT
   if (action.type === "scheduleSlice/RESET_schedule") state = undefined;
   return combinedReducer(state, action);
};

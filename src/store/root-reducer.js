import { combineReducers } from "redux";
import { newsReducer } from "./reducers/news";

export const rootReducer = combineReducers({
  news: newsReducer
});
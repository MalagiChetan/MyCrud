import { createStore } from "redux";
import { myActions } from "./reducer/reducer";

const store = createStore(myActions)

export default store
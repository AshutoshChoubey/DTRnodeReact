import { createStore } from "redux";
import AllReducers from "./reducers/AllReducers";

const initialStates = {
  auth: {
    loggedIn: function(){
    	return localStorage.getItem('token')?true:false;
    },
    user: {}
  }
};
const store = createStore(
  AllReducers,
  initialStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

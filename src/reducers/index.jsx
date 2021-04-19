import { combineReducers } from "redux";
import allPostreducer from "./buttonClickedReducer";
import selectedPerson from './selectPersonReducer';

const rootReducer = combineReducers({
    allPost : allPostreducer,
    selectedPerson : selectedPerson,
})

export default rootReducer;
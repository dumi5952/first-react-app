import { BUTTON_CLICKED_EVENT } from "../actions/constants";

export default function(state = null, action) {
    switch(action.type){
        case BUTTON_CLICKED_EVENT:
            return action.payload;
            break;
    }
    return state;
}
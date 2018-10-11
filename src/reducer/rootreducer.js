import {combineReducers} from 'redux';
import {chatOpenStatus,chatActiveUser,chatMessage} from './chatreducer'

const combineReducer=combineReducers({chatOpenStatus:chatOpenStatus,chatActiveUser,chatMessage})
export default combineReducer;


// import { combineReducers } from 'redux';
// import {chatOpenStatus} from './chatreducer'


// const rootReducer = combineReducers({
//     chatOpenStatus
// });

// export default rootReducer;

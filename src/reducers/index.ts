import { combineReducers } from "redux";

import users, { IUsersReducer } from './usersReducers';
import users2, { IUsers2Reducer } from './users2Reducers';

export default combineReducers({
    users
})

export interface IState {
    user: IUsersReducer;
    user2: IUsers2Reducer;
}

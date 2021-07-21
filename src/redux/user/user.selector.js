import { createSelector } from 'reselect';


const selecUser = state => state.user;


export const selecCurrentUser = createSelector(
    [selecUser],
    user => user.currentUser
)
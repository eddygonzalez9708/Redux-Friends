import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR, SAVING_FRIENDS, FRIENDS_SAVED } from '../actions'; 

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    savingFriends: false,
    friendsSaved: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, { fetchingFriends: true }); 
        case FRIENDS_FETCHED: 
            return Object.assign({}, state, { friends: action.payload, fetchingFriends: false, friendsFetched: true });  
        case SAVING_FRIENDS: 
            return Object.assign({}, state, { friendsFetched: false, savingFriends: true }); 
        case FRIENDS_SAVED: 
            return Object.assign({}, state, { friends: action.payload, savingFriends: false, friendsSaved: true }); 
        case ERROR: 
            return Object.assign({}, state, { error: action.payload }); 
        default: 
            return state; 
    }
}
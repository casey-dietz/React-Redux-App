import { DRAWING_CARD_SUCCESS, DRAWING_CARD_FAILURE, DRAWING_CARD } from "../actions"

const initialState = {
    isFetching: false,
    error: '',
    card: null,
    loading: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case DRAWING_CARD:
            return {...state, loading: true} 
        case DRAWING_CARD_SUCCESS:
            return {...state, loading: false, card: action.payload}
        case DRAWING_CARD_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
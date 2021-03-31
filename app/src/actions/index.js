import axios from 'axios'
export const DRAWING_CARD = 'DRAW_CARD';
export const DRAWING_CARD_SUCCESS = 'DRAWING_CARD_SUCCESS';
export const DRAWING_CARD_FAILURE = 'DRAWING_CARD_FAILURE';

export const drawCard = () => dispatch => {
    dispatch({type: DRAWING_CARD})
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(res => {
            dispatch({type: DRAWING_CARD_SUCCESS, payload: res.data.value})
        })
        .catch(err => {
            dispatch({type: DRAWING_CARD_FAILURE, payload: err})
        })
}
import {
    combineReducers
} from 'redux';
import CardReducer from '../card/cardreducer'

export default combineReducers({
    cards: CardReducer
});
import {
    combineReducers
} from 'redux';
import CardReducer from '../features/card/CardReducer';

export default combineReducers({
    cards: CardReducer
});
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import emotionReducer from './emotionReducer';
import dayReducer from './dayReducer';

export default combineReducers({
	item: itemReducer,
	emotion: emotionReducer,
	day: dayReducer
});
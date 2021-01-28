import { combineReducers } from 'redux';
import wizardNavigationReducer from './wizardNavigation';

export const rootReducer = combineReducers({
    wizardNavigation: wizardNavigationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

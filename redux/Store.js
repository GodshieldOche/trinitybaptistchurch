import { configureStore, combineReducers, createReducer } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import menuReducer from './features/menu'
import currentUserReducer from './features/currentUser'
import addMinisterReducer from './features/addMinister'
import ministersReducer from './features/getMinisters'
import ministerReducer from './features/getMinister'
import addSermonReducer from './features/addSermon'
import sermonsReducer from './features/sermons'
import sermonReducer from './features/sermon'
import addBibleStudyReducer from './features/addBibleStudy'
import bibleStudiesReducer from './features/bibleStudies'
import bibleStudyReducer from './features/bibleStudy'
import addSeriesReducer from './features/addSeries'
import seriesReducer from './features/series'
import seriesDetailsReducer from './features/seriesDetails'
import addConferenceReducer from './features/addConference'
import conferencesReducer from './features/conferences'
import conferenceReducer from './features/conference'
import addEventReducer from './features/addEvent'
import eventsReducer from './features/events'
import eventReducer from './features/event'





const combinedReducers = combineReducers({
    menu: menuReducer,
    currentUser: currentUserReducer,
    addMinister: addMinisterReducer,
    ministers: ministersReducer,
    minister: ministerReducer,
    addSermon: addSermonReducer,
    sermons: sermonsReducer,
    sermon: sermonReducer,
    addBibleStudy: addBibleStudyReducer,
    bibleStudies: bibleStudiesReducer,
    bibleStudy: bibleStudyReducer,
    addSeries: addSeriesReducer,
    series: seriesReducer,
    seriesDetails: seriesDetailsReducer,
    addConference: addConferenceReducer,
    conferences: conferencesReducer,
    conference: conferenceReducer,
    addEvent: addEventReducer,
    events: eventsReducer,
    event: eventReducer,
});

const rootReducer = createReducer(combinedReducers(undefined, { type: "" }), (builder) => {
    builder
        .addCase("__NEXT_REDUX_WRAPPER_HYDRATE__", (state, action) => ({ ...state, ...action.payload }))
        .addDefaultCase(combinedReducers);
});

const initStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
    return store
}

export const wrapper = createWrapper(initStore)
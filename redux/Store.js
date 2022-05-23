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
import addServiceReducer from './features/addService'
import servicesReducer from './features/services'
import serviceReducer from './features/service'
import clientSermonsReducer from './features/client/sermons'
import clientSermonReducer from './features/client/sermon'
import clientBibleStudiesReducer from './features/client/bibleStudies'
import clientBibleStudyReducer from './features/client/bibleStudy'
import clientSeriesReducer from './features/client/series'
import clientSeriesDetailsReducer from './features/client/seriesDetails'
import clientConferencesReducer from './features/client/conferences'
import clientConferenceReducer from './features/client/conference'
import clientEventsReducer from './features/client/events'
import clientEventReducer from './features/client/event'
import latestReducer from './features/client/latest'
import clientMinistersReducer from './features/client/ministers'






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
    addService: addServiceReducer,
    services: servicesReducer,
    service: serviceReducer,
    clientSermons: clientSermonsReducer,
    clientSermon: clientSermonReducer,
    clientBibleStudies: clientBibleStudiesReducer,
    clientBibleStudy: clientBibleStudyReducer,
    clientSeries: clientSeriesReducer,
    clientSeriesDetails: clientSeriesDetailsReducer,
    clientConferences: clientConferencesReducer,
    clientConference: clientConferenceReducer,
    clientEvents: clientEventsReducer,
    clientEvent: clientEventReducer,
    latest: latestReducer,
    clientMinisters: clientMinistersReducer,
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
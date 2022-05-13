import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuState: false,
        modalState: false,
        modalData: {},
        sessions: [],
        deletModalState: false,
        deleteModalData: {}
    },
    reducers: {
        setMenuState: (state, { payload }) => {
            state.menuState = payload
        },
        setModalState: (state, { payload }) => {
            state.modalState = payload
        },
        setDeletModalState: (state, { payload }) => {
            state.deletModalState = payload
        },
        setDeleteModalData: (state, { payload }) => {
            state.deleteModalData = payload
        },
        setModalData: (state, { payload }) => {
            state.modalData = payload
        },
        setSessions: (state, { payload }) => {
            const inArray = state.sessions.find(session => session.id === payload.id)
            if (inArray) {
                state.sessions.map(session => { 
                    if (session.id === payload.id) { 
                        session.topic = payload.topic
                        session.preacher = payload.preacher
                        session.description = payload.description
                        session.startTime = payload.startTime
                        session.endTime = payload.endTime
                    }
                })
            } else {
                state.sessions.push(payload)
            }
        },
        clearSessions: (state) => {
            state.sessions = []
        },
    },
})


export const { setMenuState, setModalState, setDeleteModalData, setDeletModalState, setModalData, setSessions, clearSessions } = menuSlice.actions
export default menuSlice.reducer
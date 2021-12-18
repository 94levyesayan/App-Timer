import { createSelector } from 'reselect'

const MainSelector = (state:State) => state.main

export const getTimers = createSelector(MainSelector, (state) => state.timers)

export const getSuccessModalStatus = createSelector(MainSelector, (state) => state.successModal)

import { createSelector } from 'reselect';
import * as didReducer from '../../did/reducer/did.reducer';
import { AppState } from 'src/app/app.state';


export const getDidState = (state: AppState) => state.did;

export const didList = createSelector(getDidState, didReducer.didList);
export const didListLoading = createSelector(getDidState, didReducer.didListLoading);
export const didListLoaded = createSelector(getDidState, didReducer.didListLoaded);
export const didListFailed = createSelector(getDidState, didReducer.didListFailed);

export const didListCount = createSelector(getDidState, didReducer.didListCount);
export const didListCountLoading = createSelector(getDidState, didReducer.didListCountLoading);
export const didListCountLoaded = createSelector(getDidState, didReducer.didListCountLoaded);
export const didListCountFailed = createSelector(getDidState, didReducer.didListCountFailed);

export const projectList = createSelector(getDidState, didReducer.projectList);
export const projectListLoading = createSelector(getDidState, didReducer.projectListLoading);
export const projectListLoaded = createSelector(getDidState, didReducer.projectListLoaded);
export const projectListFailed = createSelector(getDidState, didReducer.projectListFailed);

export const assignDid = createSelector(getDidState, didReducer.assignDid);
export const assignDidLoading = createSelector(getDidState, didReducer.assignDidLoading);
export const assignDidLoaded = createSelector(getDidState, didReducer.assignDidLoaded);
export const assignDidFailed = createSelector(getDidState, didReducer.assignDidFailed);

export const releaseDid = createSelector(getDidState, didReducer.releaseDid);
export const releaseDidLoading = createSelector(getDidState, didReducer.releaseDidLoading);
export const releaseDidLoaded = createSelector(getDidState, didReducer.releaseDidLoaded);
export const releaseDidFailed = createSelector(getDidState, didReducer.releaseDidFailed);

export const addDid = createSelector(getDidState, didReducer.addDid);
export const addDidLoading = createSelector(getDidState, didReducer.addDidLoading);
export const addDidLoaded = createSelector(getDidState, didReducer.addDidLoaded);
export const addDidFailed = createSelector(getDidState, didReducer.addDidFailed);


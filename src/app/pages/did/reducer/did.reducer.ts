import { DidState, DidStateRecord } from './did.state';
import * as actions from '../action/did.action';

export const initialState: DidState = new DidStateRecord() as unknown as DidState;

export function reducer(state = initialState, { type, payload }: any): DidState {
    if (!type) {
        return state;
    }

    switch (type) {

        //  DID LIST
        case actions.ActionTypes.DID_LIST:

            return Object.assign({}, state, {
                didListLoading: true,
                didListLoaded: false,
                didListFailed: false,
            });

        case actions.ActionTypes.DID_LIST_SUCCESS:

            return Object.assign({}, state, {
                didList: payload.data,
                didListLoading: false,
                didListLoaded: true,
                didListFailed: false,
            });

        case actions.ActionTypes.DID_LIST_FAIL:

            return Object.assign({}, state, {
                didListLoading: false,
                didListLoaded: true,
                didListFailed: true,

            });

        //  DID LIST COUNT
        case actions.ActionTypes.DID_LIST_COUNT:

            return Object.assign({}, state, {
                didListCountLoading: true,
                didListCountLoaded: false,
                didListCountFailed: false,
            });

        case actions.ActionTypes.DID_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                didListCount: payload.data,
                didListCountLoading: false,
                didListCountLoaded: true,
                didListCountFailed: false,
            });

        case actions.ActionTypes.DID_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                didListCountLoading: false,
                didListCountLoaded: true,
                didListCountFailed: true,

            });

        //  PROJECT LIST
        case actions.ActionTypes.GET_PROJECT_LIST:

            return Object.assign({}, state, {
                projectListLoading: true,
                projectListLoaded: false,
                projectListFailed: false,
            });

        case actions.ActionTypes.GET_PROJECT_LIST_SUCCESS:

            return Object.assign({}, state, {
                projectList: payload.data,
                projectListLoading: false,
                projectListLoaded: true,
                projectListFailed: false,
            });

        case actions.ActionTypes.GET_PROJECT_LIST_FAIL:

            return Object.assign({}, state, {
                projectListLoading: false,
                projectListLoaded: true,
                projectListFailed: true,

            });

        //  ASSIGN DID
        case actions.ActionTypes.ASSIGN_DID:

            return Object.assign({}, state, {
                assignDidLoading: true,
                assignDidLoaded: false,
                assignDidFailed: false,
            });

        case actions.ActionTypes.ASSIGN_DID_SUCCESS:

            return Object.assign({}, state, {
                assignDid: payload,
                assignDidLoading: false,
                assignDidLoaded: true,
                assignDidFailed: false,
            });

        case actions.ActionTypes.ASSIGN_DID_FAIL:

            return Object.assign({}, state, {
                assignDidLoading: false,
                assignDidLoaded: true,
                assignDidFailed: true,

            });

        //  RELEASE DID
        case actions.ActionTypes.RELEASE_DID:

            return Object.assign({}, state, {
                releaseDidLoading: true,
                releaseDidLoaded: false,
                releaseDidFailed: false,
            });

        case actions.ActionTypes.RELEASE_DID_SUCCESS:

            return Object.assign({}, state, {
                releaseDid: payload,
                releaseDidLoading: false,
                releaseDidLoaded: true,
                releaseDidFailed: false,
            });

        case actions.ActionTypes.RELEASE_DID_FAIL:

            return Object.assign({}, state, {
                releaseDidLoading: false,
                releaseDidLoaded: true,
                releaseDidFailed: true,

            });

        //  ADD DID
        case actions.ActionTypes.ADD_DID:

            return Object.assign({}, state, {
                addDidLoading: true,
                addDidLoaded: false,
                addDidFailed: false,
            });

        case actions.ActionTypes.ADD_DID_SUCCESS:

            return Object.assign({}, state, {
                addDid: payload,
                addDidLoading: false,
                addDidLoaded: true,
                addDidFailed: false,
            });

        case actions.ActionTypes.ADD_DID_FAIL:

            return Object.assign({}, state, {
                addDidLoading: false,
                addDidLoaded: true,
                addDidFailed: true,

            });



        default: {
            return state;
        }
    }
}

/**
 * export values
 */


export const didList = (state: DidState) => state.didList;
export const didListLoading = (state: DidState) => state.didListLoading;
export const didListLoaded = (state: DidState) => state.didListLoaded;
export const didListFailed = (state: DidState) => state.didListFailed;

export const didListCount = (state: DidState) => state.didListCount;
export const didListCountLoading = (state: DidState) => state.didListCountLoading;
export const didListCountLoaded = (state: DidState) => state.didListCountLoaded;
export const didListCountFailed = (state: DidState) => state.didListCountFailed;

export const projectList = (state: DidState) => state.projectList;
export const projectListLoading = (state: DidState) => state.projectListLoading;
export const projectListLoaded = (state: DidState) => state.projectListLoaded;
export const projectListFailed = (state: DidState) => state.projectListFailed;


export const assignDid = (state: DidState) => state.assignDid;
export const assignDidLoading = (state: DidState) => state.assignDidLoading;
export const assignDidLoaded = (state: DidState) => state.assignDidLoaded;
export const assignDidFailed = (state: DidState) => state.assignDidFailed;

export const releaseDid = (state: DidState) => state.releaseDid;
export const releaseDidLoading = (state: DidState) => state.releaseDidLoading;
export const releaseDidLoaded = (state: DidState) => state.releaseDidLoaded;
export const releaseDidFailed = (state: DidState) => state.releaseDidFailed;

export const addDid = (state: DidState) => state.addDid;
export const addDidLoading = (state: DidState) => state.addDidLoading;
export const addDidLoaded = (state: DidState) => state.addDidLoaded;
export const addDidFailed = (state: DidState) => state.addDidFailed;




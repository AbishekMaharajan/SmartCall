import { CommonState, commonStateRecord } from './common.state';
import * as actions from '../action/common.action';

export const initialState: CommonState = (new commonStateRecord() as unknown) as CommonState;

export function reducer(
    state = initialState,
    { type, payload }: any
): CommonState {
    if (!type) {
        return state;
    }

    switch (type) {
        // EXPORT LIST
        case actions.ActionTypes.EXPORT_LIST:

            return Object.assign({}, state, {
                exportListLoading: true,
                exportListLoaded: false,
                exportListFailed: false,
            });

        case actions.ActionTypes.EXPORT_LIST_SUCCESS:

            return Object.assign({}, state, {
                exportList: payload,
                exportListLoading: false,
                exportListLoaded: true,
                exportListFailed: false,
            });

        case actions.ActionTypes.EXPORT_LIST_FAIL:

            return Object.assign({}, state, {
                exportListLoading: false,
                exportListLoaded: true,
                exportListFailed: true,

            });

        // MONTHWISE CALL COUNT
        case actions.ActionTypes.MONTHWISE_CALL:

            return Object.assign({}, state, {
                monthwiseCallCountLoading: true,
                monthwiseCallCountLoaded: false,
                monthwiseCallCountFailed: false,
            });

        case actions.ActionTypes.MONTHWISE_CALL_SUCCESS:

            return Object.assign({}, state, {
                monthwiseCallCount: payload.data,
                monthwiseCallCountLoading: false,
                monthwiseCallCountLoaded: true,
                monthwiseCallCountFailed: false,
            });

        case actions.ActionTypes.MONTHWISE_CALL_FAIL:

            return Object.assign({}, state, {
                monthwiseCallCount: [],
                monthwiseCallCountLoading: false,
                monthwiseCallCountLoaded: true,
                monthwiseCallCountFailed: true,

            });

        // CLEAR MONTHWISE CALL COUNT
        case actions.ActionTypes.CLEAR_FUNC:

            return Object.assign({}, state, {
                monthwiseCallCount: [],
                monthwiseCallCountLoading: false,
                monthwiseCallCountLoaded: false,
                monthwiseCallCountFailed: false,

            });

        // FOLLOWUP LIST
        case actions.ActionTypes.FOLLOWUP_LIST:

            return Object.assign({}, state, {
                followupListLoading: true,
                followupListLoaded: false,
                followupListFailed: false,
            });

        case actions.ActionTypes.FOLLOWUP_LIST_SUCCESS:

            return Object.assign({}, state, {
                followupList: payload.data,
                followupListLoading: false,
                followupListLoaded: true,
                followupListFailed: false,
            });

        case actions.ActionTypes.FOLLOWUP_LIST_FAIL:

            return Object.assign({}, state, {
                followupList: [],
                followupListLoading: false,
                followupListLoaded: true,
                followupListFailed: true,

            });

        // TODAYS CALL COUNT
        case actions.ActionTypes.TODAYS_CALL_COUNT:

            return Object.assign({}, state, {
                todaysCallCountLoading: true,
                todaysCallCountLoaded: false,
                todaysCallCountFailed: false,
            });

        case actions.ActionTypes.TODAYS_CALL_COUNT_SUCCESS:

            return Object.assign({}, state, {
                todaysCallCount: payload.data,
                todaysCallCountLoading: false,
                todaysCallCountLoaded: true,
                todaysCallCountFailed: false,
            });

        case actions.ActionTypes.TODAYS_CALL_COUNT_FAIL:

            return Object.assign({}, state, {
                todaysCallCount: [],
                todaysCallCountLoading: false,
                todaysCallCountLoaded: true,
                todaysCallCountFailed: true,

            });


        default: {
            return state;
        }
    }
}

export const exportList = (state: CommonState) => state.exportList;
export const exportListLoading = (state: CommonState) => state.exportListLoading;
export const exportListLoaded = (state: CommonState) => state.exportListLoaded;
export const exportListFailed = (state: CommonState) => state.exportListFailed;

export const monthwiseCallCount = (state: CommonState) => state.monthwiseCallCount;
export const monthwiseCallCountLoading = (state: CommonState) => state.monthwiseCallCountLoading;
export const monthwiseCallCountLoaded = (state: CommonState) => state.monthwiseCallCountLoaded;
export const monthwiseCallCountFailed = (state: CommonState) => state.monthwiseCallCountFailed;

export const followupList = (state: CommonState) => state.followupList;
export const followupListLoading = (state: CommonState) => state.followupListLoading;
export const followupListLoaded = (state: CommonState) => state.followupListLoaded;
export const followupListFailed = (state: CommonState) => state.followupListFailed;

export const todaysCallCount = (state: CommonState) => state.todaysCallCount;
export const todaysCallCountLoading = (state: CommonState) => state.todaysCallCountLoading;
export const todaysCallCountLoaded = (state: CommonState) => state.todaysCallCountLoaded;
export const todaysCallCountFailed = (state: CommonState) => state.todaysCallCountFailed;



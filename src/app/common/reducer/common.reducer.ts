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



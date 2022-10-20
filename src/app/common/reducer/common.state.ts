import { Map, Record } from 'immutable';

export interface CommonState extends Map<string, any> {
    exportList: any;
    exportListLoading: boolean;
    exportListLoaded: boolean;
    exportListFailed: boolean;

    monthwiseCallCount: any;
    monthwiseCallCountLoading: boolean;
    monthwiseCallCountLoaded: boolean;
    monthwiseCallCountFailed: boolean;

    followupList: any;
    followupListLoading: boolean;
    followupListLoaded: boolean;
    followupListFailed: boolean;

    todaysCallCount: any;
    todaysCallCountLoading: boolean;
    todaysCallCountLoaded: boolean;
    todaysCallCountFailed: boolean;
}

export const commonStateRecord = Record({
    exportList: [],
    exportListLoading: false,
    exportListLoaded: false,
    exportListFailed: false,

    monthwiseCallCount: [],
    monthwiseCallCountLoading: false,
    monthwiseCallCountLoaded: false,
    monthwiseCallCountFailed: false,

    followupList: [],
    followupListLoading: false,
    followupListLoaded: false,
    followupListFailed: false,

    todaysCallCount: [],
    todaysCallCountLoading: false,
    todaysCallCountLoaded: false,
    todaysCallCountFailed: false,


});

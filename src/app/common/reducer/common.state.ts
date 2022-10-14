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


});

import { Map, Record } from 'immutable';

export interface DidState extends Map<string, any> {
    didList: any;
    didListLoading: boolean;
    didListLoaded: boolean;
    didListFailed: boolean;

    didListCount: any;
    didListCountLoading: boolean;
    didListCountLoaded: boolean;
    didListCountFailed: boolean;

    projectList: any;
    projectListLoading: boolean;
    projectListLoaded: boolean;
    projectListFailed: boolean;

    assignDid: any;
    assignDidLoading: boolean;
    assignDidLoaded: boolean;
    assignDidFailed: boolean;

    releaseDid: any;
    releaseDidLoading: boolean;
    releaseDidLoaded: boolean;
    releaseDidFailed: boolean;

    addDid: any;
    addDidLoading: boolean;
    addDidLoaded: boolean;
    addDidFailed: boolean;
}

export const DidStateRecord = Record({
    didList: [],
    didListLoading: false,
    didListLoaded: false,
    didListFailed: false,

    didListCount: 0,
    didListCountLoading: false,
    didListCountLoaded: false,
    didListCountFailed: false,

    projectList: [],
    projectListLoading: false,
    projectListLoaded: false,
    projectListFailed: false,

    assignDid: {},
    assignDidLoading: false,
    assignDidLoaded: false,
    assignDidFailed: false,

    releaseDid: {},
    releaseDidLoading: false,
    releaseDidLoaded: false,
    releaseDidFailed: false,

    addDid: {},
    addDidLoading: false,
    addDidLoaded: false,
    addDidFailed: false,
});


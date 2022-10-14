import { createSelector } from 'reselect';
import { AppState } from 'src/app/app.state';

import * as commonreducer from './common.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getSubState = (state: AppState) => state.common;

export const exportList = createSelector(getSubState, commonreducer.exportList);
export const exportListLoading = createSelector(getSubState, commonreducer.exportListLoading);
export const exportListLoaded = createSelector(getSubState, commonreducer.exportListLoaded);
export const exportListFailed = createSelector(getSubState, commonreducer.exportListFailed);

export const monthwiseCallCount = createSelector(getSubState, commonreducer.monthwiseCallCount);
export const monthwiseCallCountLoading = createSelector(getSubState, commonreducer.monthwiseCallCountLoading);
export const monthwiseCallCountLoaded = createSelector(getSubState, commonreducer.monthwiseCallCountLoaded);
export const monthwiseCallCountFailed = createSelector(getSubState, commonreducer.monthwiseCallCountFailed);

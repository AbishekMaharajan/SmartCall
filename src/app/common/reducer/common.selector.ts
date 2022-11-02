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

export const followupList = createSelector(getSubState, commonreducer.followupList);
export const followupListLoading = createSelector(getSubState, commonreducer.followupListLoading);
export const followupListLoaded = createSelector(getSubState, commonreducer.followupListLoaded);
export const followupListFailed = createSelector(getSubState, commonreducer.followupListFailed);

export const todaysCallCount = createSelector(getSubState, commonreducer.todaysCallCount);
export const todaysCallCountLoading = createSelector(getSubState, commonreducer.todaysCallCountLoading);
export const todaysCallCountLoaded = createSelector(getSubState, commonreducer.todaysCallCountLoaded);
export const todaysCallCountFailed = createSelector(getSubState, commonreducer.todaysCallCountFailed);

export const chartData = createSelector(getSubState, commonreducer.chartData);
export const chartDataLoading = createSelector(getSubState, commonreducer.chartDataLoading);
export const chartDataLoaded = createSelector(getSubState, commonreducer.chartDataLoaded);
export const chartDataFailed = createSelector(getSubState, commonreducer.chartDataFailed);

import { createSelector } from 'reselect';
import * as projectReducer from '../../projects/reducer/projects.reducer';
import { AppState } from 'src/app/app.state';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getProjectState = (state: AppState) => state.projects;

export const projectList = createSelector(getProjectState, projectReducer.projectList);
export const projectListLoading = createSelector(getProjectState, projectReducer.projectListLoading);
export const projectListLoaded = createSelector(getProjectState, projectReducer.projectListLoaded);
export const projectListFailed = createSelector(getProjectState, projectReducer.projectListFailed);

export const projectListCount = createSelector(getProjectState, projectReducer.projectListCount);
export const projectListCountLoading = createSelector(getProjectState, projectReducer.projectListCountLoading);
export const projectListCountLoaded = createSelector(getProjectState, projectReducer.projectListCountLoaded);
export const projectListCountFailed = createSelector(getProjectState, projectReducer.projectListCountFailed);

export const createProject = createSelector(getProjectState, projectReducer.createProject);
export const createProjectLoading = createSelector(getProjectState, projectReducer.createProjectLoading);
export const createProjectLoaded = createSelector(getProjectState, projectReducer.createProjectLoaded);
export const createProjectFailed = createSelector(getProjectState, projectReducer.createProjectFailed);

export const fetchUpdateData = createSelector(getProjectState, projectReducer.fetchUpdateData);
export const fetchUpdateDataLoading = createSelector(getProjectState, projectReducer.fetchUpdateDataLoading);
export const fetchUpdateDataLoaded = createSelector(getProjectState, projectReducer.fetchUpdateDataLoaded);
export const fetchUpdateDataFailed = createSelector(getProjectState, projectReducer.fetchUpdateDataFailed);

export const updateProject = createSelector(getProjectState, projectReducer.updateProject);
export const updateProjectLoading = createSelector(getProjectState, projectReducer.updateProjectLoading);
export const updateProjectLoaded = createSelector(getProjectState, projectReducer.updateProjectLoaded);
export const updateProjectFailed = createSelector(getProjectState, projectReducer.updateProjectFailed);

export const deleteProject = createSelector(getProjectState, projectReducer.deleteProject);
export const deleteProjectLoading = createSelector(getProjectState, projectReducer.deleteProjectLoading);
export const deleteProjectLoaded = createSelector(getProjectState, projectReducer.deleteProjectLoaded);
export const deleteProjectFailed = createSelector(getProjectState, projectReducer.deleteProjectFailed);

export const uploadFile = createSelector(getProjectState, projectReducer.uploadFile);
export const uploadFileLoading = createSelector(getProjectState, projectReducer.uploadFileLoading);
export const uploadFileLoaded = createSelector(getProjectState, projectReducer.uploadFileLoaded);
export const uploadFileFailed = createSelector(getProjectState, projectReducer.uploadFileFailed);

export const fileList = createSelector(getProjectState, projectReducer.fileList);
export const fileListLoading = createSelector(getProjectState, projectReducer.fileListLoading);
export const fileListLoaded = createSelector(getProjectState, projectReducer.fileListLoaded);
export const fileListFailed = createSelector(getProjectState, projectReducer.fileListFailed);

export const deleteDocument = createSelector(getProjectState, projectReducer.deleteDocument);
export const deleteDocumentLoading = createSelector(getProjectState, projectReducer.deleteDocumentLoading);
export const deleteDocumentLoaded = createSelector(getProjectState, projectReducer.deleteDocumentLoaded);
export const deleteDocumentFailed = createSelector(getProjectState, projectReducer.deleteDocumentFailed);


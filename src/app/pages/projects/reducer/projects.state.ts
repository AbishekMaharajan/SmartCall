import { Map, Record } from 'immutable';

export interface ProjectsState extends Map<string, any> {

    projectList: any;
    projectListLoading: boolean;
    projectListLoaded: boolean;
    projectListFailed: boolean;

    projectListCount: any;
    projectListCountLoading: boolean;
    projectListCountLoaded: boolean;
    projectListCountFailed: boolean;

    createProject: any;
    createProjectLoading: boolean;
    createProjectLoaded: boolean;
    createProjectFailed: boolean;

    fetchUpdateData: any;
    fetchUpdateDataLoading: boolean;
    fetchUpdateDataLoaded: boolean;
    fetchUpdateDataFailed: boolean;

    updateProject: any;
    updateProjectLoading: boolean;
    updateProjectLoaded: boolean;
    updateProjectFailed: boolean;

    deleteProject: any;
    deleteProjectLoading: boolean;
    deleteProjectLoaded: boolean;
    deleteProjectFailed: boolean;

    uploadFile: any;
    uploadFileLoading: boolean;
    uploadFileLoaded: boolean;
    uploadFileFailed: boolean;

    fileList: any;
    fileListLoading: boolean;
    fileListLoaded: boolean;
    fileListFailed: boolean;

    deleteDocument: any;
    deleteDocumentLoading: boolean;
    deleteDocumentLoaded: boolean;
    deleteDocumentFailed: boolean;

    templateList: any;
    templateListLoading: boolean;
    templateListLoaded: boolean;
    templateListFailed: boolean;

    createTemplate: any;
    createTemplateLoading: boolean;
    createTemplateLoaded: boolean;
    createTemplateFailed: boolean;

}

export const projectsStateRecord = Record({

    projectList: [],
    projectListLoading: false,
    projectListLoaded: false,
    projectListFailed: false,

    projectListCount: 0,
    projectListCountLoading: false,
    projectListCountLoaded: false,
    projectListCountFailed: false,

    createProject: {},
    createProjectLoading: false,
    createProjectLoaded: false,
    createProjectFailed: false,

    fetchUpdateData: [],
    fetchUpdateDataLoading: false,
    fetchUpdateDataLoaded: false,
    fetchUpdateDataFailed: false,

    updateProject: {},
    updateProjectLoading: false,
    updateProjectLoaded: false,
    updateProjectFailed: false,

    deleteProject: {},
    deleteProjectLoading: false,
    deleteProjectLoaded: false,
    deleteProjectFailed: false,

    uploadFile: {},
    uploadFileLoading: false,
    uploadFileLoaded: false,
    uploadFileFailed: false,

    fileList: [],
    fileListLoading: false,
    fileListLoaded: false,
    fileListFailed: false,

    deleteDocument: {},
    deleteDocumentLoading: false,
    deleteDocumentLoaded: false,
    deleteDocumentFailed: false,

    templateList: [],
    templateListLoading: false,
    templateListLoaded: false,
    templateListFailed: false,

    createTemplate: {},
    createTemplateLoading: false,
    createTemplateLoaded: false,
    createTemplateFailed: false,


});


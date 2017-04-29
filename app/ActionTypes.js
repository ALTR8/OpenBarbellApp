// app/ActionTypes.js

// scanning
export const START_DEVICE_SCAN = 'START_DEVICE_SCAN';
export const STOP_DEVICE_SCAN = 'STOP_DEVICE_SCAN';
export const FOUND_DEVICE = 'FOUND_DEVICE';
export const CONNECT_DEVICE = 'CONNECT_DEVICE';

// connection status
export const BLUETOOTH_OFF = 'BLUETOOTH_OFF';
export const DISCONNECTED_FROM_DEVICE = 'DISCONNECTED_FROM_DEVICE';
export const CONNECTING_TO_DEVICE = 'CONNECTING_TO_DEVICE';
export const CONNECTED_TO_DEVICE = 'CONNECTED_TO_DEVICE';

// connected
export const ADD_REP_DATA = 'ADD_REP_DATA';
export const DISCONNECT_DEVICE = 'DISCONNECT_DEVICE';

// api
export const UPLOAD_SETS = 'UPLOAD_SETS';

// auth
export const SAVE_USER = 'SAVE_USER';
export const ATTEMPTING_LOGIN = 'ATTEMPTING_LOGIN';
export const FINISHED_ATTEMPT_LOGIN = 'FINISHED_ATTEMPT_LOGIN';

// sets
export const UPDATE_WORKOUT_SET = 'UPDATE_WORKOUT_SET';
export const UPDATE_HISTORY_SET = 'UPDATE_HISTORY_SET';
export const UPDATE_WORKOUT_REP = 'UPDATE_WORKOUT_REP';
export const UPDATE_HISTORY_REP = 'UPDATE_HISTORY_REP';
export const END_SET = 'END_SET';
export const LOAD_PERSISTED_SET_DATA = 'LOAD_PERSISTED_SET_DATA';
export const END_WORKOUT = 'END_WORKOUT';
export const BEGIN_UPLOADING_SETS = 'BEGIN_UPLOADING_SETS';
export const CLEAR_SETS_BEING_UPLOADED = 'CLEAR_SETS_BEING_UPLOADED';
export const RE_ADD_SETS_TO_UPLOAD = 'RE_ADD_SETS_TO_UPLOAD';
export const UPDATE_SET_DATA_FROM_SERVER = 'UPDATE_SET_DATA_FROM_SERVER';
export const UPDATE_REVISION_FROM_SERVER = 'UPDATE_REVISION_FROM_SERVER';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

// workout
export const EDIT_WORKOUT_SET = 'EDIT_WORKOUT_SET';
export const END_EDIT_WORKOUT_SET = 'END_EDIT_WORKOUT_SET';
export const WORKOUT_AVG_FILTER = 'WORKOUT_AVG_FILTER';
export const WORKOUT_PKV_FILTER = 'WORKOUT_PKV_FILTER';
export const WORKOUT_PKH_FILTER = 'WORKOUT_PKH_FILTER';
export const WORKOUT_ROM_FILTER = 'WORKOUT_ROM_FILTER';
export const WORKOUT_DUR_FILTER = 'WORKOUT_DUR_FILTER';

// history
export const EDIT_HISTORY_SET = 'EDIT_HISTORY_SET';
export const END_EDIT_HISTORY_SET = 'END_EDIT_HISTORY_SET';
export const UPDATE_HISTORY_FILTER = 'UPDATE_HISTORY_FILTER';
export const EXPORTING_CSV = 'EXPORTING_CSV';

// settings
export const SETTINGS_UPDATE_SET_TIMER = 'SETTINGS_UPDATE_SET_TIMER';
export const SETTINGS_EDIT_SET_TIMER = 'SETTINGS_EDIT_SET_TIMER';
export const SETTINGS_END_EDIT_SET_TIMER = 'SETTINGS_END_EDIT_SET_TIMER';
export const SETTINGS_UPDATE_SYNC_DATE = 'SETTINGS_UPDATE_SYNC_DATE';

// kill switch
export const FETCH_VERSION = 'FETCH_VERSION';
export const VERSION_OK = 'VERSION_OK';
export const VERSION_KILLED = 'VERSION_KILLED';
export const VERSION_UNAVAILABLE = 'VERSION_UNAVAILABLE';
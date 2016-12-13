import * as APIUtil from '../util/read_status_api_util';


export const RECEIVE_READ_STATUSES = "RECEIVE_READ_STATUSES";
export const UPDATE_READ_STATUS = "UPDATE_READ_STATUS";
export const REMOVE_READ_STATUS = "REMOVE_READ_STATUS";

export const receiveReadStatuses = (readStatuses) => {
  return {
    type: RECEIVE_READ_STATUSES,
    readStatuses
  };
};

export const createReadStatus = (readStatus) => {
  return (dispatch) => {
    return APIUtil.createReadStatus(readStatus)
      .then((readStatuses) => dispatch(receiveReadStatuses(readStatuses)),
      (err) => console.log(err));
  };
};

export const updateReadStatus = (readStatus) => {
  return (dispatch) => {
    return APIUtil.updateReadStatus(readStatus)
      .then( (updatedReadStatuses) => dispatch(receiveReadStatuses(updatedReadStatuses)),
      (error) => console.log(error));
  };
};

export const destroyReadStatus = (readStatusId) => {
  return (dispatch) => {
    return APIUtil.destroyReadStatus(readStatusId)
      .then((updatedReadStatuses) => dispatch(receiveReadStatuses(updatedReadStatuses)),
      (error) => console.log(error));
  };
};

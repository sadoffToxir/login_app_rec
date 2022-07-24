import {AxiosError} from 'axios';

interface ErrorAction {
  type: string;
  payload: {error: AxiosError};
}

export interface ErrorState {
  [key: string]: null | AxiosError;
}

const getErrorMatches = (actionType: string) => /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType);

export const errorReducer = (state: ErrorState = {}, action: ErrorAction) => {
  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === 'FAILURE' ? action.payload.error : null,
  };
};

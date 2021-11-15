import * as actionTypes from './actionTypes';

export const setPageName = (pageName:string) => {
  return { 
      type: actionTypes.SET_PAGE_NAME,
      page: pageName
  }
}
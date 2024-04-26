import { FETCH_EMP_DETAILS, SEARCH_EMP_DETAIL } from "../constants";

export const fetchEmployeeList = (payload) => ({
    type: FETCH_EMP_DETAILS,
    payload,
  });

  export const employeeSearch = (payload) => ({
    type: SEARCH_EMP_DETAIL,
    payload,
  });
 
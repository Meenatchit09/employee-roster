import { call, put, takeEvery } from 'redux-saga/effects';
import sampleData from '../sample-data.json'
import { FETCH_EMP_DETAILS, FETCH_EMP_DETAILS_SUCCESS, FETCH_EMP_DETAILS_FAILED, SEARCH_EMP_DETAIL, SEARCH_EMP_DETAIL_SUCCESS, SEARCH_EMP_DETAIL_FAILED } from '../constants';

// Sample API integration in the response i am going to send our employee details


const apiUrl = '../sample-data.json';
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(() => sampleData)
    .catch((error) => {throw error})
}

function* fetchEmployeeList() {
   try {
      const employeeSummary = yield call(getApi);
      yield put({type: FETCH_EMP_DETAILS_SUCCESS, payload: employeeSummary});
   } catch (e) {
      yield put({type: FETCH_EMP_DETAILS_FAILED, message: e.message});
   }
}

function* employeeSearch(action) {
   try {
     yield put({type: SEARCH_EMP_DETAIL_SUCCESS, payload: action.payload});
   } catch (e) {
      yield put({type: SEARCH_EMP_DETAIL_FAILED, message: e.message});
   }
}

function* employeeSaga() {
   yield takeEvery(FETCH_EMP_DETAILS, fetchEmployeeList);
   yield takeEvery(SEARCH_EMP_DETAIL, employeeSearch);
}

export default employeeSaga;
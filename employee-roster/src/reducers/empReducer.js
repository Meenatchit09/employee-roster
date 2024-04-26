import { FETCH_EMP_DETAILS_FAILED, FETCH_EMP_DETAILS_SUCCESS, SEARCH_EMP_DETAIL_FAILED, SEARCH_EMP_DETAIL_SUCCESS } from "../constants";

const initialState = {
    empSummary: [],
    companyInfo: {},
    TotalEmpSummary: []
};

const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMP_DETAILS_SUCCESS:
            return { ...state, empSummary: action.payload.employees,TotalEmpSummary: action.payload.employees, companyInfo: action.payload.companyInfo };
        case FETCH_EMP_DETAILS_FAILED:
            return { ...state, empSummary: action.payload };
        case SEARCH_EMP_DETAIL_SUCCESS:
            const {payload} = action
            const filteredData = payload !== '' ? state.TotalEmpSummary.filter(item => item.firstName.includes(payload) || item.id.includes(payload) || item.lastName.includes(payload) || item.contactNo.includes(payload)) : state.TotalEmpSummary
            return { ...state, empSummary: filteredData };
        case SEARCH_EMP_DETAIL_FAILED:
            return { ...state, empSummary: action.payload };
        default:
            return state;
    }
};

export default empReducer;
export const SELECT_COMPANY = "SELECT_COMPANY";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const GET_JOB_LOADING_ON = "GET_JOB_LOADING_ON";
export const GET_JOB_LOADING_OFF = "GET_JOB_LOADING_OFF";
export const SET_JOB = "SET_JOB";

export const favouriteCompanyDispatch = (company) => ({ type: REMOVE_FAVOURITE, payload: company._id });
export const getJobsDispatch = (data) => ({ type: SET_JOB, payload: data });

export const getJobs = (params) => {
  return async (dispatch, getState) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(getJobsDispatch(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

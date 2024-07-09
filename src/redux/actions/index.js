export const SELECT_COMPANY = "SELECT_COMPANY";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const getJobs = (params) => {
  return async (dispatch, getState) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "SET_JOB", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

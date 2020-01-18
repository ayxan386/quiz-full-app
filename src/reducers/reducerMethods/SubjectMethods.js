import Axios from "axios";
import { source, load_subjects } from "../reducerActions";

export const getSubjects = () => {
  return (dispatch, getState) => {
    Axios.get(`https://${source}/api/subject`, {
      headers: {
        Authorization: getState().auth.token
      }
    }).then(data => {
      dispatch(load_subjects(data.data));
    });
  };
};

import axios from "axios";
import { GET_ALL_COUNTRIES, GET_DETAIL, FILTER_BY_NAME, POST_ACTIVITY, FILTER_BY_ACTIVITY } from "./types";


const urlMyApi = "http://localhost:3001";
export function getAllCountries() {
  return async function (dispatch) {
    var aux = await axios.get(`${urlMyApi}/countries`);
    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: aux.data,
    });
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    var aux = await axios.get(`${urlMyApi}/countries/${id}`);
    console.log("GET_DETAIL: ", aux.data);
    return dispatch({
      type: GET_DETAIL,
      payload: aux.data,
    });
  };
}

export function clearDetail() {
  return {
    type: GET_DETAIL,
    payload: [],
  };
}

export function filterByName(name) {
  console.log("dentro de filterByName");
  console.log("name: ", name);
  return {
    type: FILTER_BY_NAME,
    payload: name,
  }
}

export function postDog (newDog){
    return async function (dispatch) {
        try {
            const res = await axios.post(`http://localhost:3001/countries`, newDog);
            console.log("res.data: ", res.data);
            return dispatch({type: POST_ACTIVITY,
          payload: res.data });/// aqui te quedaste
        } catch (error) {
          console.log(error);
        }
    };
};

export function filterByActivity(activity){
  console.log("dentro de filterByActivity");
  console.log("Activity: ", activity);
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  }
}
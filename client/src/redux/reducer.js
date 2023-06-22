import {
    GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    GET_COUNTRIES_TO_VIEW,
    GET_DETAIL,
    CLEAR_DETAIL,
    FILTER_BY_NAME,
    FILTER_BY_ACTIVITY,
    POST_ACTIVITY
  } from "./types";
  
  const intialState = {
    countriesAll: [],
    countriesFilteredAndOrdered: [],//se filtra countriesAll y se ordena a si misma
    countriesToView: [],//según la pagina
    activities: [],
    countryDetails: {},
    optionsContinents:[],
    optionsActivities:[],
    orderCountriesBy:["ascendingByCountry"],
    filterCountriesBy: {name: "All", continent:"All", activities:"All"},
    limitByPage: 10,
    currentPage: 1,
    maxCantOfPage: 0,
    pages: [],
  };
  import { getCountriesToView } from "./utils";
  
  export default function rootReducer(state = intialState, action) {
    switch (action.type) {
      case GET_ALL_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
          allcountries: action.payload,
        };
      case GET_ALL_ACTIVITIES:
        return {
          ...state,
          activities: action.payload,
        };
      case GET_COUNTRIES_TO_VIEW:
         return { ...state, countriesToView: getCountriesToView(payload) };
      case GET_DETAIL:
        return {
          ...state,
          details: action.payload,
        };
  
      case CLEAR_DETAIL:
        return {
          ...state,
          details: [],
        };
      case FILTER_BY_NAME:
        return {
          ...state,
          countries: state.allcountries.filter((e) => {
            return e.name.includes(action.payload);
          }),
        };
      case POST_ACTIVITY:
        return {
          ...state,
          allcountries: state.allcountries.push(action.payload),
          countries: state.allcountries,
        };
      case FILTER_BY_ACTIVITY:
        return {
          ...state,
          countries: state.allcountries.filter((e) => {
            console.log(e.activities,e.activities);
            return e.activities.includes(action.payload);
          }),
        };
  
      default:
        return state;
    }
  }
  
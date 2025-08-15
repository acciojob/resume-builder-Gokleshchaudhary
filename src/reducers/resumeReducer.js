import {
  UPDATE_PROFILE,
  ADD_EDUCATION,
  DELETE_EDUCATION,
  ADD_SKILL,
  DELETE_SKILL,
  ADD_PROJECT,
  DELETE_PROJECT,
  ADD_SOCIAL,
  DELETE_SOCIAL,
  NEXT_PAGE,
  PREV_PAGE,
} from "../actions";

const initialState = {
  currentPage: 1,
  profile: {
    fname: "",
    lname: "",
    phone: "",
    address: "",
    url: "",
  },
  education: [],
  skills: [],
  projects: [],
  socialMedia: [],
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload,
        },
      };

    case ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
      };

    case DELETE_EDUCATION:
      return {
        ...state,
        education: state.education.filter(
          (_, index) => index !== action.payload
        ),
      };

    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };

    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload),
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((_, index) => index !== action.payload),
      };

    case ADD_SOCIAL:
      return {
        ...state,
        socialMedia: [...state.socialMedia, action.payload],
      };

    case DELETE_SOCIAL:
      return {
        ...state,
        socialMedia: state.socialMedia.filter(
          (_, index) => index !== action.payload
        ),
      };

    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
};

export default resumeReducer;

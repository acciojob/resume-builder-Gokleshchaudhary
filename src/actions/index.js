// Action Types
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const ADD_EDUCATION = "ADD_EDUCATION";
export const DELETE_EDUCATION = "DELETE_EDUCATION";
export const ADD_SKILL = "ADD_SKILL";
export const DELETE_SKILL = "DELETE_SKILL";
export const ADD_PROJECT = "ADD_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const ADD_SOCIAL = "ADD_SOCIAL";
export const DELETE_SOCIAL = "DELETE_SOCIAL";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";

// Action Creators
export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

export const addEducation = (education) => ({
  type: ADD_EDUCATION,
  payload: education,
});

export const deleteEducation = (index) => ({
  type: DELETE_EDUCATION,
  payload: index,
});

export const addSkill = (skill) => ({
  type: ADD_SKILL,
  payload: skill,
});

export const deleteSkill = (index) => ({
  type: DELETE_SKILL,
  payload: index,
});

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const deleteProject = (index) => ({
  type: DELETE_PROJECT,
  payload: index,
});

export const addSocial = (social) => ({
  type: ADD_SOCIAL,
  payload: social,
});

export const deleteSocial = (index) => ({
  type: DELETE_SOCIAL,
  payload: index,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

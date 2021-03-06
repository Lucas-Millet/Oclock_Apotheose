export const SET_SELECTED = 'SET_SELECTED';

export const setSelected = (marker) => ({
  type: SET_SELECTED,
  marker,
});

export const SET_NEW_MARKER = 'SET_NEW_MARKER';

export const setNewMarker = (marker) => ({
  type: SET_NEW_MARKER,
  marker,
});

export const SET_ADRESS = 'SET_ADRESS';

export const setNewAdress = (adress) => ({
  type: SET_ADRESS,
  adress,
});

export const SET_CENTER = 'SET_CENTER';

export const setNewCenter = (center) => ({
  type: SET_CENTER,
  center,
});

export const SAVE_USER_ADDRESS = 'SAVE_USER_ADDRESS';

export const saveUserAddress = (address) => ({
  type: SAVE_USER_ADDRESS,
  address,
});

export const LOAD_USERS_BY_COUNTRY = 'LOAD_USERS_BY_COUNTRY';

export const loadUsersByCountry = () => ({
  type: LOAD_USERS_BY_COUNTRY,
});

export const SAVE_USER_LIST = 'SAVE_USER_LIST';

export const saveUsersList = (usersList) => ({
  type: SAVE_USER_LIST,
  usersList,
});

export const SAVE_USERS_CITIES = 'SAVE_USERS_CITIES';

export const saveUsersCities = (cities) => ({
  type: SAVE_USERS_CITIES,
  cities,
});

export const LOADING_CITIES = 'LOADING_CITIES';

export const loadingCities = (value) => ({
  type: LOADING_CITIES,
  value,
});

export const SAVE_USERS_CITY = 'SAVE_USERS_CITY';

export const saveUsersCity = (users, name) => ({
  type: SAVE_USERS_CITY,
  users,
  name,
});


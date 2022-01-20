export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBw8A2UGVCH400pHbqREVXzdK0LRekIYyOE8qBAyxCB7bM56ClToPbPC6-hPJY26INHEt7285lO90_wla9pylITAQFrmJDRN0ajaBlENBniYSd85IDLl4IUNGPFKU3HlnqNYfgN2dOLSEtZ7GP4OCKMG2jo9ZEhyVdBIGrJEhamiBg4Ni3n",
};

const reducer = (state, action) => {
  //   console.log(action);
  console.log(state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

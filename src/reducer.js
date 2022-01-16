export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //   token:
  // "BQDQ1Aa09n3eEYnpUb1JwfmLw4ZmE8OZiYzfLLPWY7CY6IsYl3nU37q3xVq5vW0lkxcOGV_p85c5aYjoG1fJwCwBumXRQ4HyeA0VporX5gReoHm3P_P6geIGTc8NF4pUswbdSQyK2v5E1w_ck1O4EdNlyGLH3PlkB9OP87YPtiVrnnH6iXMb",
};

const reducer = (state, action) => {
  console.log(action);
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

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
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

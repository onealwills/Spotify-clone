import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./DataLayer";
import { getTokenFromResponse } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();
  // console.log(user);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log("my token", hash);

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("the user", user);
        if (user) {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        }
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify
        .getUserPlaylists("59TGX6Y57eQHpje9AA60Vm")
        .then((discover_weekly) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: discover_weekly,
          });
        });
    }
  }, [token, dispatch]);

  console.log("check user", user);
  console.log("check token", token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

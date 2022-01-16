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

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;

import React from "react";
import "./Body.css";
import { useStateValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import SongRow from "./SongRow";
import "./SongRow.css";

function Body({ spotify }) {
  const [{ discover_weekly }] = useStateValue();
  console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          //   src={discover_weekly?.images[0]?.url }
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yP4z3QUF26yEpPDV1tlc3AHaEo%26pid%3DApi&f=1"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description....</p>
          {/* <p>{discover_weekly?.description}</p> */}
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))} */}
        {/* <SongRow track={track} /> */}
        <div className="songRow">
          {/* <img className="songRow__album" src={track.album.images[0].url} alt="" /> */}
          <img
            className="songRow__album"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jZIZfitQxLLGkc5kTYAYkQHaKQ%26pid%3DApi&f=1"
            alt=""
          />
          <div className="songRow__info">
            <h1>Adele</h1>
            <p>
              {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "} */}
              Set fire to the rain
            </p>
          </div>
        </div>
        <div className="songRow">
          {/* <img className="songRow__album" src={track.album.images[0].url} alt="" /> */}
          <img
            className="songRow__album"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.noBJGm9BS5U6UGq-F5SOSgHaEK%26pid%3DApi&f=1"
            alt=""
          />
          <div className="songRow__info">
            <h1>The weekend</h1>
            <p>
              {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "} */}
              Blinding lights
            </p>
          </div>
        </div>
        <div className="songRow">
          {/* <img className="songRow__album" src={track.album.images[0].url} alt="" /> */}
          <img
            className="songRow__album"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.J61cq64F1GDxvSGKr2jLkgHaE9%26pid%3DApi&f=1"
            alt=""
          />
          <div className="songRow__info">
            <h1>Sam Smith</h1>
            <p>
              {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "} */}
              No peace
            </p>
          </div>
        </div>
        <div className="songRow">
          {/* <img className="songRow__album" src={track.album.images[0].url} alt="" /> */}
          <img
            className="songRow__album"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9qw7RnqA1Ul6jF07_QqASwHaF7%26pid%3DApi&f=1"
            alt=""
          />
          <div className="songRow__info">
            <h1>Avril lavigne</h1>
            <p>
              {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "} */}
              Am with you
            </p>
          </div>
        </div>
        <div className="songRow">
          {/* <img className="songRow__album" src={track.album.images[0].url} alt="" /> */}
          <img
            className="songRow__album"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.T_B9w6mfgf8y8RrYqafzsgHaKv%26pid%3DApi&f=1"
            alt=""
          />
          <div className="songRow__info">
            <h1>Taylor Swift</h1>
            <p>
              {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "} */}
              Tears drops on my guitar
            </p>
          </div>
        </div>
        <div className="songRow">
          {/* <img className="songRow__album" src={track.album.images[0].url} alt="" /> */}
          <img
            className="songRow__album"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dWFbleWCcbK4Z5w2tRTC7AHaJh%26pid%3DApi&f=1"
            alt=""
          />
          <div className="songRow__info">
            <h1>Jayz</h1>
            <p>
              {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "} */}
              99 problems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;

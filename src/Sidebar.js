import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./DataLayer";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const [{ playlists }] = useStateValue();
  console.log(playlists);
  // console.log(playlists.name);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))} */}

      <SidebarOption title="Hip hop" />
      <SidebarOption title="blues" />
      <SidebarOption title="Rock" />
      <SidebarOption title="alternative" />
      <SidebarOption title="worship" />
      <SidebarOption title="afro beat" />
      <SidebarOption title="jazz" />
      <SidebarOption title="regae" />
      <SidebarOption title="contempolary" />
    </div>
  );
}

export default Sidebar;

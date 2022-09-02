import React from "react";
import { ReactDOM, useState } from "react";

import { Playlist } from "./Playlist";
import data from "../useData/data";
import ReactPlayer from "react-player";
import pauseBtn from "./../images/pause.png";
import playBtn from "./../images/playBtn.png";

const KEY = "AIzaSyCAWjEyi-fMkn8XIrG44WwSiuXUQDX7ZP0";
//TODO RENAME FILES WITH CAPITAL LETTER TO START

/*

this component will be made up of our playlist-items component
and user will be able to add more playlists into this component when clicking on a button
so when the button is clicked they will provide link to external playlist 
and it will be added to the DOM and inside this component

*/
export function Sidebar() {
  const styles = {
    container: {
      height: "100%",
      float: "left",
      width: "20%",
      backgroundColor: "red",
    },
    btn: {
      backgroundColor: "transparent",
      border: "none",
    },
  };

  const [newButton, setNewButton] = useState([]);
  const [videoData, setVideoData] = useState();
  const [allVideos, setAllVideos] = useState(initVideos(data)); // to use to update our videos components array
  const [isPlaying, setIsPlaying] = useState(false);

  function getNewPlayList() {
    const baseUrl = "https://api.rss2json.com/v1/api.json";
    // generate name and time props
    // we should pass in a url and make a youtube api call
    // using react.useEffect to get these values
    return {};
  }

  const URL =
    "https://www.googleapis.com/youtube/v3/videos?key=" +
    KEY +
    "&part=snippet&id=f02mOEt11OQ";
  React.useEffect(
    function () {
      fetch(URL)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("data = " + JSON.stringify(data.items[0].id));
          setVideoData(data);
        });
    },
    [newButton]
  );

  function addPlaylist() {
    // set a limit possibly of 10 or 5 rn on playlists to add for testing

    console.log("new button len = " + newButton.length);
    if (newButton.length < 5) {
      setNewButton([...newButton, []]);
    } else {
      // will be an error message
    }
    // if len < 5 add another
    // else we can add a toast message to pop up saying to delete or etc
  }
  //initVideos(data);
  function handleChange() {}

  function generateVideo(data, index) {
    return {
      url: data[index].url,
      id: data[index].id,
      playing: false,
    };
  }

  function initVideos(data) {
    const videos = [];

    for (let i = 0; i < data.length; i++) {
      videos.push(generateVideo(data, i));
    }
    console.log("Videos = " + JSON.stringify(videos));
    return videos;
  }

  const videos = allVideos.map((item) => {
    return (
      <>
        <Playlist url={item.url} id={item.id} playing={item.playing} />
        <button style={styles.btn} onClick={() => playVideo(item.id)}>
          {item.playing ? (
            <img src={pauseBtn}></img>
          ) : (
            <img src={playBtn}></img>
          )}
        </button>
      </>
    );
  });

  function playVideo(id) {
    //setIsPlaying(!isPlaying);
    setAllVideos((oldVideos) => {
      return oldVideos.map((video) => {
        return video.id === id
          ? { ...video, url: data[id - 1].url, playing: !video.playing } // no need for pause button now this will do both
          : { ...video, url: data[video.id - 1].url, playing: false };
      });
    });
  }

  function pauseVideo(id) {
    setAllVideos((oldVideos) => {
      return oldVideos.map((video) => {
        return video.id === id
          ? { ...video, url: data[id - 1].url, playing: false }
          : { ...video };
      });
    });
  }

  return (
    <div className="sidebar-container" style={styles.container}>
      <button className="add-playlist" onClick={(props) => addPlaylist()}>
        Add New Playlist
      </button>
      <p>sidebar for now!</p>
      {videos}
    </div>
  );
}

import React from "react";
import { Playlist } from "./Playlist";
import videoData from "./../useData/videoData";

export function AstheticVid() {
  const styles = {
    videoContainer: {
      height: "75%",
      width: "70%",
      float: "right",
      backgroundColor: "lime",
    },
  };

  function getVids(data) {
    // data is an array of objects
    const astheticVids = data.map((vid) => {
      return vid;
    });
    console.log("get vid data = " + JSON.stringify(astheticVids));
    return astheticVids;
  }

  return (
    <div className="asthetic-container" style={styles.videoContainer}>
      <Playlist />
      <button onClick={() => getVids(videoData)}>Click for test</button>
    </div>
  );
}

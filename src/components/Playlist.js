import React from "react";
import ReactPlayer from "react-player";
import data from "../useData/data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// could possibly pass in prop value show video that will show the yt video if yes if not then just use the audio by hiding video using css
export function Playlist(props) {
  const [play, setPlay] = React.useState(false);

  // function playVideo(playId) {
  //   // loop through our array find the id clicked on
  //   // and set play to false on every other one but the one clicked on
  //   // setPlay(!play)
  //   setPlay(oldPlayers => oldPlayers.map(player => {
  //     return player.id === playId ? {
  //       {...player}
  //     }
  //   }))
  // }
  const styles = {
    videoContainer: {
      position: "relative",
      paddingTop: "44%",
    },
    reactPlayer: {
      height: "15%",
      width: "20%",
    },
  };

  return (
    <div className="playlist-container">
      <Container>
        <ReactPlayer
          height="100%"
          width="100%"
          url={props.url}
          id={props.id}
          playing={props.playing}
        />
      </Container>

      <p>This is the playlists name {props.name}</p>
      <p>The playlist is {props.playtime} long</p>
    </div>
  );
}

/**
 *
 *
 * onclick of each react player we can possibly loop through the array videos and set the playing state to the rest to false
 * by going through and finding the id of the one that is clicked
 * and every other one we set their state to not playing
 *
 */

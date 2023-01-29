import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);

player.on("timeupdate", throttle(setWatchingTime, 1000));

function setWatchingTime(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
}
const seconds = localStorage.getItem(LOCALSTORAGE_KEY);
if (seconds) {
  player.setCurrentTime(seconds);
}

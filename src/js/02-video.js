import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
  }, 1000)
);

player
  .setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const CURRENTTIME="videoplayer-current-time";
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    const onPlay = function(data) {
        localStorage.setItem(CURRENTTIME,data.seconds)
    };
    
    player.on('timeupdate', throttle (onPlay,1000));

    player.setCurrentTime(localStorage.getItem(CURRENTTIME)).then(function(seconds) {
    })

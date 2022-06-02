import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const MusicPlayer = props => {
    const options = {
        audioLists: [
            {
                name: props.title,
                singer: props.artist,
                cover: props.cover,
                musicSrc: props.preview
            }
        ],
        playIndex: 0,
        mode: 'full',
        closeText: 'Close',
        showDestroy:true,
        defaultPosition: { bottom: 100, right: 20 }
    };
    return <ReactJkMusicPlayer {...options} />;
};

export default MusicPlayer;
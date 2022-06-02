import Carousel from './../components/Carousel/Carousel';
import React, { useState } from 'react';
import TopChart from './../components/TopChart/TopChart';
import 'react-jinke-music-player/assets/index.css';
import MusicPlayer from './../components/Music Player/MusicPlayer';
import Loader from './../components/Loader/Loader';

function Home() {

    const [currentSong, setCurrentSong] = useState({ title: '', artist: '', cover: '', preview: '' });

    const playMusic = (props) => {
        setCurrentSong({
            title: props.title,
            artist: props.artist,
            cover: props.cover,
            preview: props.preview
        })
    }

    return (

        <div>
            <Carousel />
            <TopChart playMusic={playMusic} />
            {/* <ReactJkMusicPlayer
                title="{props.trackName}"
                artist="{props.artists}"
                cover="https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab"
                preview="{props.trackPreviewUrl}"
            /> */}
            <Loader></Loader>

            {(() => {
                switch (currentSong.preview) {
                    case null: return alert("Song Can't Be Accessed");
                    case '': return console.log("bajate raho");
                    default: return <MusicPlayer title={currentSong.title} artist={currentSong.artist} cover={currentSong.cover} preview={currentSong.preview}>{console.log(currentSong)}</MusicPlayer>;
                }
            })()}



        </div>
    );
}

export default Home;
import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBar from './../components/SearchResults/SearchBar';
import MusicPlayer from './../components/Music Player/MusicPlayer';


function Search() {

    const [currentSong, setCurrentSong] = useState({ title: '', artist: '', cover: '', preview: '' });
    const playMusic = (props) => {
        setCurrentSong({
            title: props.title,
            artist: props.artist,
            cover: props.cover,
            preview: props.preview
        })
        console.log(props);
    }


    return (
        <div>
            <SearchBar playMusic={playMusic} />

            {(() => {
                switch (currentSong.preview) {
                    case null: return alert("Bsdk aukat ke baahar ke gane mat sun");
                    case '': return console.log("bajate raho");
                    default: return <MusicPlayer title={currentSong.title} artist={currentSong.artist} cover={currentSong.cover} preview={currentSong.preview}>{console.log(currentSong)}</MusicPlayer>;
                }
            })()}

            <div className="d-flex justify-content-center mt-5 mb-5">
                <CircularProgress color="secondary" />
            </div>

        </div>
    );
}

export default Search;
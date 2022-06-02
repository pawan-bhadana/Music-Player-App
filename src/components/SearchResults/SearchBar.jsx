import React from "react";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Credentials } from "./../../Credentials";
import "./SearchBarext.css"
import CardGroupSearch from "./../Card/CardGroupSearch";

class SearchBar extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            token: '',
            loading: false,
            message: '',
        };
        this.cancel = '';
        this.playMusic=props.playMusic;
    }


    fetchSearchResults = (updatedPageNo = '', query, mytoken) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';	// By default the limit of results is 20
        const searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=50&`; if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        axios(searchUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + mytoken,

            },
            cancelToken: this.cancel.token
        })

            .then((res) => {
                const resultNotFoundMsg = !res.data.tracks.items.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                let tempArray = [];
                for (let i = 0; i < res.data.tracks.items.length; i++) {
                    tempArray = [...tempArray, {
                        index: tempArray.length,
                        artists: res.data.tracks.items[i].artists[0].name,
                        spotifyLink: res.data.tracks.items[i].external_urls.spotify,
                        trackId: res.data.tracks.items[i].id,
                        imageUrl: res.data.tracks.items[i].album.images[1].url,
                        trackName: res.data.tracks.items[i].name,
                        trackPreviewUrl: res.data.tracks.items[i].preview_url
                    }]
                }
                this.setState({

                    results: tempArray,
                    // message: resultNotFoundMsg,
                    loading: false,
                })
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };

    getToken = (query) => {
        const spotify = Credentials();

        console.log('RENDERING APP.JS');

        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
            .then(tokenResponse => {
                // console.log(tokenResponse)
                let curr = tokenResponse.data.access_token
                this.fetchSearchResults(1, query, curr)
                this.setState({ token: curr })
            });
    }

    handleOnInputChange = (event) => {
        event.preventDefault();
        console.log("typed")
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '' });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.getToken(query);
            });
        }
    };

    renderSearchResults = () => {
        const results = this.state.results;
        if (results.length) {
            return (
                <CardGroupSearch params={results} playMusic={this.playMusic}></CardGroupSearch>

            );
        }
    };

    submitHandler(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form className="d-flex justify-content-center input-group position-relative" onSubmit={this.submitHandler}>
                        <div className="d-flex myform">
                            <span className="input-group-append bg-white border-right-0" >
                                <span className="input-group-text bg-transparent border-right-0" style={{borderRadius:"0px"}}>
                                    <SearchRoundedIcon className="icon" color="primary" />
                                </span>
                            </span>

                            <input
                                className="form-control d-inline border-left-0 pr-0 pb-0 pt-0 pl-0"
                                id="search-input"
                                type="search"
                                style={{borderRadius:"0px"}}
                                placeholder="Search for songs you love"
                                aria-label="Search"
                                autoComplete="off"
                                onChange={this.handleOnInputChange}
                            />
                        </div>

                    </form>

                </div>

                {this.renderSearchResults()}
            </div>
        )
    }
}

export default SearchBar;
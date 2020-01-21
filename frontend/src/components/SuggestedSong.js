import { Component } from 'react';
import React from 'react';
import ImgPlaceholder from '../assets/headphones.jpg'

export default class SuggestedSong extends Component {
    render() {
        return (
            <div className="sugSongWrapper">
                <div className="songicon">
                    <img src={ImgPlaceholder}></img>
                    </div>
                    <div className="songdesc">
                        <div id="songname">Nuvalo Bianche</div><br />
                        <div id="artist">Ludovico Enaudi</div>
                    </div>
            </div>
        )
    }
}

import  { Component } from 'react';
import React from 'react'

class Searchbar extends Component {
    render() {
        return (
            <div>
                <input id="searchbar" type="text" placeholder="Search music"></input>
            </div>
        );
    }
}

export default Searchbar;
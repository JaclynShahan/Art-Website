import React, {Component} from 'react';
import Axios from 'axios';
import { Input } from 'antd';



class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchStr: ""
        }
    }

    onSearch = () => {
        if (this.state.searchStr.length > 0) {
            const filterGallery = this.props.newArt.artList.filter(art => {
                if (art.title
                    .toLowerCase()
                    .includes(this.state.searchStr.toLowerCase()) ||
                    art.description
                    .toLowerCase()
                    .includes(this.state.searchStr.toLowerCase()) ||
                    art.size
                    .toLowerCase()
                    .includes(this.state.searchStr.toLowerCase()) ||
                    art.price
                    .toLowerCase()
                    .includes(this.state.searchStr.toLowerCase())
                    ) {
                        return true
                    } else {
                        return false
                    }
            })
            console.log("Filtered Art", filterGallery)
            //this.props.setSearchArt(filterGallery)
        }
        else {
            //this.props.setSearchArt([])
        }
    }

    render() {
        const {searchStr} = this.state
        return (
            <div>
            <Input.Search 
            placeholder="Search Gallery..."
            value={searchStr}
            onChange={e => this.setState({searchStr: e.target.value})}
            onSearch={() => this.onSearch()}
            />
            </div>
        )
    }
}

export default Search;

//make redux info
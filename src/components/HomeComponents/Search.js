import React, {Component} from 'react';
import {connect} from 'react-redux';
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
            this.props.setSearchArt(filterGallery)
        }
        else {
            this.props.setSearchArt([])
        }
    }

    render() {
        const {searchStr} = this.state
        return (
            <div>
            <Input.Search 
            className="searchbar"
            placeholder="Search Gallery..."
            value={searchStr}
            onChange={e => this.setState({searchStr: e.target.value})}
            onSearch={() => this.onSearch()}
            />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state:", state)
    return state
}

const mapDispatchToProps = dispatch => ({
   setSearchArt (arr)  {
       dispatch ({
           type: "SEARCH_LIST",
           payload: arr
       })
   }
})
export default connect (mapStateToProps, mapDispatchToProps) (Search);


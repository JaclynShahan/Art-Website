import React, {Component} from 'react';
import {Input, Button, Modal} from 'antd'
import {connect} from 'react-redux';

class EditCards extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const {id, image, title, description, size, price} = this.props.edit;
        
        console.log("Props", this.props)
        return(
            <div>
                <Input 
                onChange={(e) => this.props.setEditImage(e)}
                value={this.props.edit.image}
                />
                <Input 
                onChange={(e) => this.props.setEditTitle(e)}
                value={this.props.edit.title}
                />
                <Input 
                onChange={(e) => this.props.setEditDescripton(e)}
                value={this.props.edit.description}
                />
                <Input 
                onChange={(e) => this.props.setEditSize(e)}
                value={this.props.edit.size}
                />
                <Input 
                onChange={(e) => this.props.setEditPrice(e)}
                value={this.props.price}
                />
                <Button
                onClick={() => this.props.onEditCard(id, image, title, description, size, price)}
                type="primary"
                >
                Save
                </Button>

            </div>
        )
    }
}


const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    setEditId (e) {
        dispatch({
            type: "EDIT_ID",
            payload: e.target.value
        })
    },
    setEditImage (e) {
      dispatch({
          type: "EDIT_IMAGE",
          payload: e.target.value
      })
    },
    setEditTitle (e) {
        dispatch({
            type: "EDIT_TITLE",
            payload: e.target.value
        })
    },
    setEditDescription (e) {
        dispatch({
            type: "EDIT_DESCRIPTION",
            payload: e.target.value
        })
    },
    setEditSize (e) {
        dispatch({
            type: "EDIT_SIZE",
            payload: e.target.value
        })
    },
    setEditPrice (e) {
        dispatch({
            type: "EDIT_PRICE",
            payload: e.target.value
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(EditCards);
import React, {Component} from 'react';
import {Input, Button} from 'antd'

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
                onChange={}
                value={this.props.edit.image}
                />
                <Input 
                onChange={}
                value={this.props.edit.title}
                />
                <Input 
                onChange={}
                value={this.props.edit.description}
                />
                <Input 
                onChange={}
                value={this.props.edit.size}
                />
                <Input 
                onChange={}
                value={this.props.price}
                />
                <Button
                onClick={}
                type="primary"
                >
                Save
                </Button>

            </div>
        )
    }
}

export default EditCards;
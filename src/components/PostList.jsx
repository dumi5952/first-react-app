import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {selectUser} from '../actions/buttonClickAction';
import SelectedPerson from './SelectedPerson'

class PostList extends Component {

    createListItems(){
        return this.props.allPost.map(a=>{
            return(
                <li key={a.id} onClick={()=>{this.props.selectUser(a)}}>{a.name.first} {a.name.last}</li>
            )
        })
    }

    render() {
        if(!this.props.allPost){
            return (
                <React.Fragment>
                    <h2>Click the Button first</h2>
                    <br></br>
                    <h2>Then select a User</h2>
                </React.Fragment>
            )
        }
        else{
            return (
                <React.Fragment>
                    <div>
                        <ul>
                            {this.createListItems()}
                        </ul>
                    </div>
                    <br></br>
                    <SelectedPerson />
                </React.Fragment>

            )
        }

    }
}

function dispatchUserToProps(dispatch){
    return bindActionCreators({selectUser:selectUser},dispatch);
}

function mapsStateToProps(State){
    return{
        allPost:State.allPost
    }
}

export default connect(mapsStateToProps,dispatchUserToProps)(PostList)
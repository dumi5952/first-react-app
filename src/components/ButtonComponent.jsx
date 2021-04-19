import React, { Component } from "react";
import {fetchAllPosts} from '../actions/buttonClickAction';
import { bindActionCreators } from "redux";
import {connect} from "react-redux";

class ButtonComponent extends Component {
  render() {
    return (
        <React.Fragment>
            <div className='Align-Center'>
                <button className='btn-success btn' onClick={()=>this.props.fetchAllPosts()}>Click me</button>
            </div>
        </React.Fragment>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchAllPosts: fetchAllPosts},dispatch);

}

export default connect(null,matchDispatchToProps) (ButtonComponent);
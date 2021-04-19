import React, { Component } from "react";
import moment from 'moment'

class ListPreview extends Component {
  render() {
    return (
     <React.Fragment>
       <ol>
           <li>Name : {(this.props.title).toUpperCase()}. {this.props.first} {this.props.last}</li>
           <li>Gender : {this.props.gender}</li>
           <li>Email : {this.props.email}</li>
           <li>Date of birth : {moment(this.props.dob).format('DD/MMM/yyyy')}</li>
       </ol>
       <hr/>
     </React.Fragment>
    );
  }
}

export default ListPreview;
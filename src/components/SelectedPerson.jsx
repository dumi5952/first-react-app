import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from 'moment'

class SelectedPerson extends Component {
    setSelectedUserDetails(a){
        return(
            <tr key={a.id}>
                <td >{a.id}</td>
                <td>{(a.name.title).charAt(0).toUpperCase() + (a.name.title).slice(1)}.{a.name.first} {a.name.last}</td>
                <td>{a.email}</td>
                <td>{(a.gender).charAt(0).toUpperCase() + (a.gender).slice(1)}</td>
                <td>{moment(a.dob.date).format('DD/MMM/yyyy')}</td>
                <td>{a.phone}</td>
            </tr>
        )
    }
    render() {

        if(!this.props.selectedUser){
            return <h2>Now select a user</h2>
        }else{
            return (
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Telephone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.setSelectedUserDetails(this.props.selectedUser)}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

function mapSelectedUserStateToProps(state) {
    return{
        selectedUser:state.selectedPerson
    }
}

export default connect(mapSelectedUserStateToProps)(SelectedPerson)

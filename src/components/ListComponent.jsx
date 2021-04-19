import React, { Component } from "react";

import ListPreview from './ListPreview';
class ListComponent extends Component {
    sampleList = [
        {
            "id":1,
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "Brad",
              "last": "Gibson"
            },
            "email": "brad.gibson@example.com",
            "dob": {
                "date": "1993-07-20T09:44:18.674Z",
                "age": 26
              },
            "phone": "011-962-7516"
        },
        {
            "id":2,
            "gender": "female",
            "name": {
              "title": "mrs",
              "first": "Hansika",
              "last": "Ranathunga"
            },
            "email": "han.ran@example.com",
            "dob": {
                "date": "1991-07-20T09:44:18.674Z",
                "age": 28
              },
            "phone": "011-258-9636"
        },
        {
            "id":3,
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "Namal",
              "last": "Rajapaksha"
            },
            "email": "namal.raj@example.com",
            "dob": {
                "date": "1995-07-20T09:44:18.674Z",
                "age": 24
              },
            "phone": "011-123-4567"
        }
    ];

  render() {
    return (
     <div>
         {nameList(this.sampleList)}
     </div>
    );
  }
}

function nameList(name){
    return(
        name.map(aPerson =>{
            return(
                <ListPreview
                key = {aPerson.id}
                title = {aPerson.name.title}
                first = {aPerson.name.first}
                last = {aPerson.name.last}
                gender = {aPerson.gender}
                email = {aPerson.email}
                dob = {aPerson.dob.date}
                />
            );
        })
    );
}
export default ListComponent;
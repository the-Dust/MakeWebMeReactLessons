import React from 'react';

const Profile = props=>
    (
        <div>
                <img src="http://i.pravatar.cc/300" alt=""/>
                <h1>{props.name} {props.surname}</h1>
                <p>Возраст: {props.age}</p>
                <p>Пол: {props.gender}</p>
                <p>О себе: {props.about}</p>
            </div>
    )

export default Profile
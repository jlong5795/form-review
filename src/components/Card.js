import React from 'react';

const Card = props => {

    return (
        <div>
            <h3>{props.member.name}</h3>
            <p>{props.member.email}</p>
            <p>{props.member.role}</p>
        </div>
    )
};

export default Card;